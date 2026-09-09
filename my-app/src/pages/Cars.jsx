import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Rating,
  MenuItem,
} from "@mui/material";

import {
  Search,
  FavoriteBorder,
  Favorite,
  DirectionsCar,
  People,
  LocalGasStation,
  Settings,
  ArrowForward,
} from "@mui/icons-material";

// =====================================================
// CAR DATA
// =====================================================

export const cars = [
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
    color: "Black",
    location: "Lahore",
    description:
      "The BMW M4 Competition is a powerful luxury sports car with excellent performance, premium comfort, and modern technology.",
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
    color: "White",
    location: "Islamabad",
    description:
      "Mercedes-Benz C-Class combines elegant design, comfortable interiors, smooth driving, and advanced safety features.",
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
    color: "Silver",
    location: "Lahore",
    description:
      "Toyota Corolla is a reliable and comfortable economy car that is perfect for city driving and long journeys.",
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
    color: "Black",
    location: "Islamabad",
    description:
      "Range Rover Sport delivers luxury, comfort, strong performance, and excellent road presence for every journey.",
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
    color: "Gray",
    location: "Lahore",
    description:
      "Audi A6 offers a premium interior, elegant styling, smooth performance, and advanced technology.",
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
    color: "Red",
    location: "Lahore",
    description:
      "Honda Civic provides a stylish design, comfortable cabin, reliable performance, and excellent fuel economy.",
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
    year: 2024,
    color: "Blue",
    location: "Islamabad",
    description:
      "Ford Explorer is a spacious SUV designed for families, road trips, and comfortable long-distance driving.",
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
    color: "Yellow",
    location: "Lahore",
    description:
      "Porsche 911 is a premium sports car offering outstanding performance, iconic design, and an unforgettable driving experience.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
];

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  "All",
  "Economy",
  "Luxury",
  "SUV",
  "Sports",
];

// =====================================================
// CARS COMPONENT
// =====================================================

const Cars = ({ darkMode }) => {
  // =====================================================
  // THEME
  // =====================================================

  const textColor = darkMode ? "#ffffff" : "#111827";

  const secondaryText = darkMode
    ? "#9ca3af"
    : "#6b7280";

  const cardBg = darkMode
    ? "#1f2937"
    : "#ffffff";

  const borderColor = darkMode
    ? "#374151"
    : "#e5e7eb";

  const pageBg = darkMode
    ? "#0f172a"
    : "#f8fafc";

  // =====================================================
  // STATES
  // =====================================================

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [favorites, setFavorites] = useState([]);

  // =====================================================
  // FILTER CARS
  // =====================================================

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      car.category === category;

    return matchesSearch && matchesCategory;
  });

  // =====================================================
  // FAVORITE
  // =====================================================

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // =====================================================
  // RESET
  // =====================================================

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: pageBg,
        color: textColor,
        transition: "all 0.3s ease",
        py: {
          xs: 5,
          md: 8,
        },
      }}
    >
      <Container maxWidth="xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: "750px",
            mx: "auto",
            mb: 5,
          }}
        >
          {/* Badge */}

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.8,
              mb: 2,
              borderRadius: "50px",
              backgroundColor: darkMode
                ? "rgba(37,99,235,.15)"
                : "#dbeafe",
              color: "#2563eb",
              fontWeight: 800,
              fontSize: "14px",
            }}
          >
            <DirectionsCar sx={{ fontSize: 20 }} />

            Our Fleet
          </Box>

          {/* Heading */}

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "36px",
                sm: "46px",
                md: "56px",
              },
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 2,
              color: textColor,
            }}
          >
            Available{" "}

            <Box
              component="span"
              sx={{
                color: "#2563eb",
              }}
            >
              Cars
            </Box>
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              color: secondaryText,
              fontSize: {
                xs: "15px",
                md: "17px",
              },
              lineHeight: 1.7,
            }}
          >
            Choose from our wide collection of
            comfortable, reliable and luxury cars
            for your perfect journey.
          </Typography>
        </Box>

        {/* =================================================
            SEARCH & FILTER
        ================================================= */}

        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 2,
              md: 2.5,
            },
            mb: 5,
            borderRadius: "18px",
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            boxShadow: darkMode
              ? "0 10px 30px rgba(0,0,0,.2)"
              : "0 10px 30px rgba(0,0,0,.05)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "2fr 1fr",
              },
              gap: 2,
            }}
          >

            {/* Search */}

            <TextField
              fullWidth
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search car name..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  color: textColor,

                  "& fieldset": {
                    borderColor: borderColor,
                  },

                  "&:hover fieldset": {
                    borderColor: "#2563eb",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#2563eb",
                  },
                },

                "& input::placeholder": {
                  color: secondaryText,
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        color: secondaryText,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            {/* Category Select */}

            <TextField
              select
              fullWidth
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              label="Category"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  color: textColor,

                  "& fieldset": {
                    borderColor: borderColor,
                  },

                  "&:hover fieldset": {
                    borderColor: "#2563eb",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#2563eb",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: secondaryText,
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#2563eb",
                },
              }}
            >
              {categories.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Category Chips */}

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            {categories.map((item) => (
              <Chip
                key={item}
                label={item}
                clickable
                onClick={() =>
                  setCategory(item)
                }
                sx={{
                  fontWeight: 700,

                  color:
                    category === item
                      ? "#ffffff"
                      : textColor,

                  backgroundColor:
                    category === item
                      ? "#2563eb"
                      : darkMode
                      ? "#374151"
                      : "#f1f5f9",

                  "&:hover": {
                    backgroundColor:
                      category === item
                        ? "#1d4ed8"
                        : darkMode
                        ? "#4b5563"
                        : "#e2e8f0",
                  },
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* =================================================
            RESULTS HEADER
        ================================================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 800,
              color: textColor,
            }}
          >
            {filteredCars.length} Cars Available
          </Typography>

          <Typography
            sx={{
              color: secondaryText,
              fontSize: "14px",
            }}
          >
            Find your perfect ride
          </Typography>
        </Box>

        {/* =================================================
            CAR GRID
        ================================================= */}

        {filteredCars.length > 0 ? (
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              },

              gap: 3,
            }}
          >
            {filteredCars.map((car) => (
              <Paper
                key={car.id}
                elevation={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,

                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",

                    borderColor:
                      "#2563eb",

                    boxShadow: darkMode
                      ? "0 20px 40px rgba(0,0,0,.35)"
                      : "0 20px 40px rgba(37,99,235,.12)",
                  },
                }}
              >

                {/* =================================================
                    CAR IMAGE
                ================================================= */}

                <Box
                  sx={{
                    position: "relative",
                    height: {
                      xs: 220,
                      md: 210,
                    },
                    overflow: "hidden",
                    backgroundColor:
                      darkMode
                        ? "#111827"
                        : "#f1f5f9",
                  }}
                >
                  <Box
                    component="img"
                    src={car.image}
                    alt={car.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.5s ease",

                      "&:hover": {
                        transform:
                          "scale(1.06)",
                      },
                    }}
                  />

                  {/* Category */}

                  <Chip
                    label={car.category}
                    size="small"
                    sx={{
                      position:
                        "absolute",

                      top: 15,
                      left: 15,

                      backgroundColor:
                        "#2563eb",

                      color: "#ffffff",

                      fontWeight: 700,
                    }}
                  />

                  {/* Favorite */}

                  <IconButton
                    onClick={() =>
                      toggleFavorite(car.id)
                    }
                    sx={{
                      position:
                        "absolute",

                      top: 10,
                      right: 10,

                      backgroundColor:
                        darkMode
                          ? "rgba(17,24,39,.9)"
                          : "rgba(255,255,255,.9)",

                      "&:hover": {
                        backgroundColor:
                          darkMode
                            ? "#111827"
                            : "#ffffff",

                        transform:
                          "scale(1.08)",
                      },
                    }}
                  >
                    {favorites.includes(
                      car.id
                    ) ? (
                      <Favorite
                        sx={{
                          color:
                            "#ef4444",
                        }}
                      />
                    ) : (
                      <FavoriteBorder
                        sx={{
                          color: darkMode
                            ? "#ffffff"
                            : "#374151",
                        }}
                      />
                    )}
                  </IconButton>
                </Box>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <Box sx={{ p: 2.5 }}>

                  {/* Name */}

                  <Typography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: textColor,
                      mb: 0.8,
                    }}
                  >
                    {car.name}
                  </Typography>

                  {/* Rating */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
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
                        fontSize: "13px",
                        fontWeight: 700,
                        color:
                          secondaryText,
                      }}
                    >
                      {car.rating}
                    </Typography>
                  </Box>

                  {/* CAR INFORMATION */}

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns:
                        "1fr 1fr",
                      gap: 1,
                      mb: 2.5,
                    }}
                  >

                    {/* Seats */}

                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 0.8,
                      }}
                    >
                      <People
                        sx={{
                          fontSize: 19,
                          color:
                            "#2563eb",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "12px",
                          color:
                            secondaryText,
                        }}
                      >
                        {car.seats} Seats
                      </Typography>
                    </Box>

                    {/* Fuel */}

                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 0.8,
                      }}
                    >
                      <LocalGasStation
                        sx={{
                          fontSize: 19,
                          color:
                            "#2563eb",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "12px",
                          color:
                            secondaryText,
                        }}
                      >
                        {car.fuel}
                      </Typography>
                    </Box>

                    {/* Transmission */}

                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 0.8,
                      }}
                    >
                      <Settings
                        sx={{
                          fontSize: 19,
                          color:
                            "#2563eb",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "12px",
                          color:
                            secondaryText,
                        }}
                      >
                        {car.transmission}
                      </Typography>
                    </Box>

                    {/* Category */}

                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 0.8,
                      }}
                    >
                      <DirectionsCar
                        sx={{
                          fontSize: 19,
                          color:
                            "#2563eb",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "12px",
                          color:
                            secondaryText,
                        }}
                      >
                        {car.category}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Divider */}

                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor:
                        borderColor,
                      mb: 2,
                    }}
                  />

                  {/* PRICE */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize:
                            "11px",
                          color:
                            secondaryText,
                        }}
                      >
                        Starting from
                      </Typography>

                      <Typography
                        sx={{
                          fontSize:
                            "23px",
                          fontWeight: 900,
                          color:
                            textColor,
                        }}
                      >
                        ${car.price}

                        <Box
                          component="span"
                          sx={{
                            fontSize:
                              "12px",
                            fontWeight: 500,
                            color:
                              secondaryText,
                            ml: 0.5,
                          }}
                        >
                          /day
                        </Box>
                      </Typography>
                    </Box>

                    {/* DETAILS BUTTON */}

                    <Button
                      component={Link}
                      to={`/cars/${car.id}`}
                      variant="contained"
                      endIcon={
                        <ArrowForward />
                      }
                      sx={{
                        borderRadius:
                          "10px",

                        px: 2,
                        py: 1.1,

                        textTransform:
                          "none",

                        fontWeight: 700,

                        backgroundColor:
                          "#2563eb",

                        "&:hover": {
                          backgroundColor:
                            "#1d4ed8",

                          transform:
                            "translateY(-2px)",
                        },
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        ) : (

          /* =================================================
              NO CARS
          ================================================= */

          <Paper
            elevation={0}
            sx={{
              textAlign: "center",
              py: 8,
              px: 3,
              borderRadius: "20px",
              backgroundColor: cardBg,
              border:
                `1px solid ${borderColor}`,
            }}
          >
            <DirectionsCar
              sx={{
                fontSize: 60,
                color: secondaryText,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                color: textColor,
                mb: 1,
              }}
            >
              No Cars Found
            </Typography>

            <Typography
              sx={{
                color: secondaryText,
                mb: 3,
              }}
            >
              Try another car name or
              category.
            </Typography>

            <Button
              variant="contained"
              onClick={resetFilters}
              sx={{
                backgroundColor:
                  "#2563eb",

                textTransform:
                  "none",

                borderRadius:
                  "10px",

                fontWeight: 700,

                "&:hover": {
                  backgroundColor:
                    "#1d4ed8",
                },
              }}
            >
              Reset Filters
            </Button>
          </Paper>
        )}

      </Container>
    </Box>
  );
};

export default Cars;