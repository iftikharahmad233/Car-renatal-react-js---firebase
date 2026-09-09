import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Chip,
  Rating,
  Divider,
  CircularProgress,
} from "@mui/material";

import {
  ArrowBack,
  CheckCircle,
  DirectionsCar,
  People,
  LocalGasStation,
  Settings,
  Speed,
  CalendarMonth,
  LocalOffer,
  EventAvailable,
} from "@mui/icons-material";

// ================= FIREBASE =================

import {
  doc,
  onSnapshot,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../libs/firebase";

// =====================================================
// CAR DATA
// =====================================================

const cars = [
  {
    id: 1,
    name: "BMW M4 Competition",
    category: "Luxury",
    price: 99,
    rating: 4.9,
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2024,
    speed: "250 km/h",
    color: "Black",
    location: "Lahore",
    description:
      "The BMW M4 Competition is a powerful luxury sports car that combines premium comfort with excellent performance. It is perfect for business trips, special occasions and long journeys.",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    category: "Luxury",
    price: 89,
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2024,
    speed: "240 km/h",
    color: "Silver",
    location: "Islamabad",
    description:
      "Mercedes-Benz C-Class offers a premium driving experience with elegant design, comfortable seats and modern technology.",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    name: "Toyota Corolla",
    category: "Economy",
    price: 49,
    rating: 4.6,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2023,
    speed: "190 km/h",
    color: "White",
    location: "Lahore",
    description:
      "Toyota Corolla is a reliable and comfortable car for daily travel, family trips and city driving. It provides excellent fuel economy and comfort.",
    image:
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    name: "Range Rover Sport",
    category: "SUV",
    price: 129,
    rating: 4.9,
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2024,
    speed: "225 km/h",
    color: "Black",
    location: "Islamabad",
    description:
      "Range Rover Sport provides luxury, power and excellent road performance. It is ideal for family trips and premium travel experiences.",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 5,
    name: "Audi A6",
    category: "Luxury",
    price: 95,
    rating: 4.7,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2024,
    speed: "250 km/h",
    color: "Grey",
    location: "Lahore",
    description:
      "Audi A6 delivers a smooth combination of luxury, technology and performance. A great choice for premium travel.",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 6,
    name: "Honda Civic",
    category: "Economy",
    price: 55,
    rating: 4.5,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2023,
    speed: "200 km/h",
    color: "Blue",
    location: "Lahore",
    description:
      "Honda Civic is a stylish and comfortable sedan suitable for city driving, family trips and everyday use.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 7,
    name: "Ford Explorer",
    category: "SUV",
    price: 85,
    rating: 4.6,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2023,
    speed: "210 km/h",
    color: "White",
    location: "Islamabad",
    description:
      "Ford Explorer is a spacious SUV with seven seats. It is perfect for families, road trips and long-distance travel.",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 8,
    name: "Porsche 911",
    category: "Sports",
    price: 199,
    rating: 5,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2024,
    speed: "320 km/h",
    color: "Red",
    location: "Lahore",
    description:
      "Porsche 911 is a premium sports car designed for people who want outstanding performance, luxury and an unforgettable driving experience.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
];

// =====================================================
// DETAIL COMPONENT
// =====================================================

const Detail = ({ darkMode }) => {
  const { id } = useParams();

  // Find selected car
  const car = cars.find((item) => item.id === Number(id));

  // =====================================================
  // BOOKING STATES
  // =====================================================

  const [isBooked, setIsBooked] = useState(false);
  const [checkingBooking, setCheckingBooking] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);

  // =====================================================
  // FIRESTORE REAL-TIME BOOKING CHECK
  // =====================================================

  useEffect(() => {
    if (!car) {
      setCheckingBooking(false);
      return;
    }

    // Every car gets its own unique document.
    //
    // Example:
    // Car 1 -> bookings/car_1
    // Car 2 -> bookings/car_2
    // Car 3 -> bookings/car_3

    const bookingRef = doc(db, "bookings", `car_${car.id}`);

    const unsubscribe = onSnapshot(
      bookingRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setIsBooked(true);
        } else {
          setIsBooked(false);
        }

        setCheckingBooking(false);
      },
      (error) => {
        console.error("Booking Check Error:", error);
        setCheckingBooking(false);
      }
    );

    // Cleanup listener when page changes/unmounts
    return () => unsubscribe();
  }, [car]);

  // =====================================================
  // BOOK CAR
  // =====================================================

  const bookCar = async () => {
    if (!car) return;

    // Prevent another click
    if (isBooked || bookingLoading) {
      return;
    }

    setBookingLoading(true);

    try {
      const bookingRef = doc(db, "bookings", `car_${car.id}`);

      await runTransaction(db, async (transaction) => {
        // Check if this car is already booked
        const bookingSnapshot = await transaction.get(bookingRef);

        if (bookingSnapshot.exists()) {
          throw new Error("ALREADY_BOOKED");
        }

        // Create booking
        transaction.set(bookingRef, {
          carId: car.id,
          name: car.name,
          category: car.category,
          price: car.price,
          rating: car.rating,
          seats: car.seats,
          transmission: car.transmission,
          fuel: car.fuel,
          year: car.year,
          speed: car.speed,
          color: car.color,
          location: car.location,
          description: car.description,
          image: car.image,

          status: "Booked",

          bookedAt: serverTimestamp(),
        });
      });

      // Update UI immediately
      setIsBooked(true);

      alert("Car booked successfully!");
    } catch (error) {
      console.error("Booking Error:", error);

      if (error.message === "ALREADY_BOOKED") {
        setIsBooked(true);

        alert(
          "This car is already booked by another person."
        );
      } else {
        alert("Booking failed! Please try again.");
      }
    } finally {
      setBookingLoading(false);
    }
  };

  // =====================================================
  // THEME COLORS
  // =====================================================

  const textColor = darkMode ? "#ffffff" : "#111827";

  const secondaryText = darkMode
    ? "#9ca3af"
    : "#6b7280";

  const cardBg = darkMode
    ? "#1f2937"
    : "#ffffff";

  const pageBg = darkMode
    ? "#0f172a"
    : "#f8fafc";

  const borderColor = darkMode
    ? "#374151"
    : "#e5e7eb";

  // =====================================================
  // CAR NOT FOUND
  // =====================================================

  if (!car) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: pageBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 500,
            width: "100%",
            textAlign: "center",
            p: 5,
            borderRadius: "20px",
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
          }}
        >
          <DirectionsCar
            sx={{
              fontSize: 70,
              color: "#2563eb",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 900,
              color: textColor,
              mb: 1,
            }}
          >
            Car Not Found
          </Typography>

          <Typography
            sx={{
              color: secondaryText,
              mb: 3,
            }}
          >
            Sorry, the car you are looking for does not exist.
          </Typography>

          <Button
            component={Link}
            to="/cars"
            variant="contained"
            startIcon={<ArrowBack />}
            sx={{
              backgroundColor: "#2563eb",
              borderRadius: "10px",
              px: 3,
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
            }}
          >
            Back to Cars
          </Button>
        </Paper>
      </Box>
    );
  }

  // =====================================================
  // DETAIL PAGE
  // =====================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: pageBg,
        color: textColor,
        py: {
          xs: 4,
          md: 7,
        },
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">

        {/* BACK BUTTON */}

        <Button
          component={Link}
          to="/cars"
          startIcon={<ArrowBack />}
          sx={{
            color: textColor,
            mb: 3,
            textTransform: "none",
            fontWeight: 700,

            "&:hover": {
              color: "#2563eb",
              backgroundColor: "transparent",
            },
          }}
        >
          Back to Available Cars
        </Button>

        {/* MAIN DETAIL CARD */}

        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: {
              xs: "18px",
              md: "28px",
            },
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,

            boxShadow: darkMode
              ? "0 20px 50px rgba(0,0,0,.35)"
              : "0 20px 50px rgba(0,0,0,.08)",
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1.15fr 1fr",
              },
            }}
          >

            {/* ================= CAR IMAGE ================= */}

            <Box
              sx={{
                position: "relative",

                minHeight: {
                  xs: 280,
                  sm: 400,
                  md: 560,
                },

                backgroundColor: darkMode
                  ? "#111827"
                  : "#f1f5f9",

                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={car.image}
                alt={car.name}
                sx={{
                  width: "100%",
                  height: "100%",

                  minHeight: {
                    xs: 280,
                    sm: 400,
                    md: 560,
                  },

                  objectFit: "cover",

                  transition: "transform .5s ease",

                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
              />

              {/* CATEGORY */}

              <Chip
                label={car.category}
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "14px",
                  px: 1,
                }}
              />

              {/* BOOKED BADGE */}

              {isBooked && (
                <Chip
                  icon={
                    <CheckCircle
                      sx={{
                        color: "#ffffff !important",
                      }}
                    />
                  }
                  label="Already Booked"
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontWeight: 800,
                  }}
                />
              )}

              {/* RATING */}

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,

                  display: "flex",
                  alignItems: "center",
                  gap: 1,

                  px: 2,
                  py: 1,

                  borderRadius: "12px",

                  backgroundColor: darkMode
                    ? "rgba(17,24,39,.9)"
                    : "rgba(255,255,255,.95)",

                  backdropFilter: "blur(10px)",
                }}
              >
                <Rating
                  value={car.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: darkMode
                      ? "#ffffff"
                      : "#111827",
                  }}
                >
                  {car.rating}
                </Typography>
              </Paper>
            </Box>

            {/* ================= CAR INFORMATION ================= */}

            <Box
              sx={{
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.7,

                  color: "#2563eb",

                  fontSize: "13px",

                  fontWeight: 800,

                  textTransform: "uppercase",

                  letterSpacing: "1px",

                  mb: 1.5,
                }}
              >
                <DirectionsCar
                  sx={{
                    fontSize: 18,
                  }}
                />

                Premium Rental
              </Box>

              {/* TITLE */}

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "40px",
                    md: "48px",
                  },

                  lineHeight: 1.1,

                  fontWeight: 900,

                  color: textColor,

                  mb: 2,
                }}
              >
                {car.name}
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  color: secondaryText,

                  fontSize: "15px",

                  lineHeight: 1.8,

                  mb: 3,
                }}
              >
                {car.description}
              </Typography>

              {/* SPECIFICATIONS */}

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: textColor,
                  mb: 2,
                }}
              >
                Car Specifications
              </Typography>

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr 1fr",
                    sm: "1fr 1fr",
                  },

                  gap: 1.5,

                  mb: 3,
                }}
              >
                <SpecItem
                  icon={<People />}
                  title="Seats"
                  value={`${car.seats} People`}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />

                <SpecItem
                  icon={<LocalGasStation />}
                  title="Fuel"
                  value={car.fuel}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />

                <SpecItem
                  icon={<Settings />}
                  title="Transmission"
                  value={car.transmission}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />

                <SpecItem
                  icon={<Speed />}
                  title="Top Speed"
                  value={car.speed}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />

                <SpecItem
                  icon={<CalendarMonth />}
                  title="Model Year"
                  value={car.year}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />

                <SpecItem
                  icon={<EventAvailable />}
                  title="Location"
                  value={car.location}
                  darkMode={darkMode}
                  textColor={textColor}
                  secondaryText={secondaryText}
                  borderColor={borderColor}
                />
              </Box>

              <Divider
                sx={{
                  borderColor: borderColor,
                  mb: 3,
                }}
              />

              {/* ================= PRICE + BOOKING ================= */}

              <Box
                sx={{
                  display: "flex",

                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                  },

                  justifyContent: "space-between",

                  gap: 2,

                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
              >
                {/* PRICE */}

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: secondaryText,
                      mb: 0.3,
                    }}
                  >
                    Rental Price
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        md: "32px",
                      },

                      fontWeight: 900,

                      color: textColor,
                    }}
                  >
                    ${car.price}

                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: secondaryText,
                        ml: 0.5,
                      }}
                    >
                      / day
                    </Box>
                  </Typography>
                </Box>

                {/* ================= BOOK BUTTON ================= */}

                <Button
                  onClick={bookCar}
                  variant="contained"
                  disabled={
                    isBooked ||
                    checkingBooking ||
                    bookingLoading
                  }
                  endIcon={
                    checkingBooking ||
                    bookingLoading ? (
                      <CircularProgress
                        size={18}
                        sx={{
                          color: "#ffffff",
                        }}
                      />
                    ) : isBooked ? (
                      <CheckCircle />
                    ) : (
                      <EventAvailable />
                    )
                  }
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },

                    px: 3,
                    py: 1.5,

                    borderRadius: "11px",

                    textTransform: "none",

                    fontSize: "15px",

                    fontWeight: 800,

                    backgroundColor: isBooked
                      ? "#6b7280"
                      : "#2563eb",

                    boxShadow: isBooked
                      ? "none"
                      : "0 8px 20px rgba(37,99,235,.25)",

                    "&:hover": {
                      backgroundColor: isBooked
                        ? "#6b7280"
                        : "#1d4ed8",

                      transform: isBooked
                        ? "none"
                        : "translateY(-2px)",
                    },

                    "&.Mui-disabled": {
                      backgroundColor: isBooked
                        ? "#6b7280"
                        : "#94a3b8",

                      color: "#ffffff",
                    },

                    transition: ".3s",
                  }}
                >
                  {checkingBooking
                    ? "Checking..."
                    : bookingLoading
                    ? "Booking..."
                    : isBooked
                    ? "Already Booked"
                    : "Book This Car"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* ================= FEATURES SECTION ================= */}

        <Box
          sx={{
            mt: 5,

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },

            gap: 2,
          }}
        >
          <FeatureCard
            icon={<CheckCircle />}
            title="Fully Inspected"
            text="Every vehicle is checked before rental."
            darkMode={darkMode}
            textColor={textColor}
            secondaryText={secondaryText}
            cardBg={cardBg}
            borderColor={borderColor}
          />

          <FeatureCard
            icon={<LocalOffer />}
            title="Best Price"
            text="Competitive prices with no hidden fees."
            darkMode={darkMode}
            textColor={textColor}
            secondaryText={secondaryText}
            cardBg={cardBg}
            borderColor={borderColor}
          />

          <FeatureCard
            icon={<EventAvailable />}
            title="Easy Booking"
            text="Quick and simple booking process."
            darkMode={darkMode}
            textColor={textColor}
            secondaryText={secondaryText}
            cardBg={cardBg}
            borderColor={borderColor}
          />
        </Box>

        {/* ================= RENTAL INFORMATION ================= */}

        <Paper
          elevation={0}
          sx={{
            mt: 5,

            p: {
              xs: 3,
              md: 4,
            },

            borderRadius: "20px",

            backgroundColor: cardBg,

            border: `1px solid ${borderColor}`,
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 900,
              color: textColor,
              mb: 2,
            }}
          >
            Rental Information
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              gap: 2,
            }}
          >
            <InfoRow
              title="Minimum Rental Period"
              value="1 Day"
              textColor={textColor}
              secondaryText={secondaryText}
            />

            <InfoRow
              title="Security Deposit"
              value="$200"
              textColor={textColor}
              secondaryText={secondaryText}
            />

            <InfoRow
              title="Fuel Policy"
              value="Same as received"
              textColor={textColor}
              secondaryText={secondaryText}
            />

            <InfoRow
              title="Cancellation"
              value="Free cancellation"
              textColor={textColor}
              secondaryText={secondaryText}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

// =====================================================
// SPECIFICATION COMPONENT
// =====================================================

const SpecItem = ({
  icon,
  title,
  value,
  darkMode,
  textColor,
  secondaryText,
  borderColor,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.2,
        p: 1.5,
        borderRadius: "12px",
        border: `1px solid ${borderColor}`,
        backgroundColor: darkMode
          ? "#111827"
          : "#f8fafc",
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkMode
            ? "rgba(37,99,235,.15)"
            : "#dbeafe",
          color: "#2563eb",
        }}
      >
        {React.cloneElement(icon, {
          sx: {
            fontSize: 20,
          },
        })}
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "11px",
            color: secondaryText,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 800,
            color: textColor,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

// =====================================================
// FEATURE CARD
// =====================================================

const FeatureCard = ({
  icon,
  title,
  text,
  darkMode,
  textColor,
  secondaryText,
  cardBg,
  borderColor,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "18px",
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: "#2563eb",
        },
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          minWidth: 50,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkMode
            ? "rgba(37,99,235,.15)"
            : "#dbeafe",
          color: "#2563eb",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 800,
            color: textColor,
            mb: 0.4,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            color: secondaryText,
            lineHeight: 1.5,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};

// =====================================================
// INFO ROW
// =====================================================

const InfoRow = ({
  title,
  value,
  textColor,
  secondaryText,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        py: 1.5,
        borderBottom:
          "1px solid rgba(128,128,128,.15)",
      }}
    >
      <Typography
        sx={{
          color: secondaryText,
          fontSize: "14px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: textColor,
          fontWeight: 700,
          fontSize: "14px",
          textAlign: "right",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Detail;