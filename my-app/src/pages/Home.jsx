import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Rating,
  Avatar,
} from "@mui/material";

import {
  ArrowForward,
  DirectionsCar,
  Star,
  CheckCircle,
  LocalOffer,
  SupportAgent,
  EventAvailable,
  AttachMoney,
} from "@mui/icons-material";

const Home = ({ darkMode }) => {
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

  const borderColor = darkMode
    ? "#374151"
    : "#e5e7eb";

  const sectionBg = darkMode
    ? "#111827"
    : "#ffffff";

  // =====================================================
  // WHY CHOOSE US DATA
  // =====================================================

  const features = [
    {
      icon: <DirectionsCar />,
      title: "Wide Variety of Cars",
      description:
        "Choose from a wide variety of cars, including economy, luxury, SUVs, and more for every journey.",
    },

    {
      icon: <AttachMoney />,
      title: "Affordable Prices",
      description:
        "Enjoy competitive rates on all vehicles without compromising quality or facing hidden fees ever.",
    },

    {
      icon: <EventAvailable />,
      title: "Easy Booking Process",
      description:
        "Experience a smooth, hassle-free booking process that’s fast, intuitive, and accessible from any device.",
    },

    {
      icon: <SupportAgent />,
      title: "Customer Support",
      description:
        "Friendly, responsive customer support available 24/7 to assist you anytime with questions or issues.",
    },
  ];

  // =====================================================
  // CUSTOMER FEEDBACK DATA
  // =====================================================

  const feedbacks = [
    {
      name: "Emily Johnson",
      rating: 4,
      text:
        "Booking was super easy and the car was spotless. Highly recommended!",
      image:
        "https://i.pravatar.cc/150?img=47",
    },

    {
      name: "Michael Smith",
      rating: 5,
      text:
        "Great service, affordable price. The support team was quick to answer.",
      image:
        "https://i.pravatar.cc/150?img=12",
    },

    {
      name: "Sarah Lee",
      rating: 4,
      text:
        "Loved the wide range of cars available. Found the perfect ride for me.",
      image:
        "https://i.pravatar.cc/150?img=32",
    },

    {
      name: "David Kim",
      rating: 5,
      text:
        "Car was decent, but could have been cleaner. Booking process was smooth.",
      image:
        "https://i.pravatar.cc/150?img=11",
    },

    {
      name: "Aisha Patel",
      rating: 5,
      text:
        "Exceptional service and quality vehicles. My luxury car rental felt amazing.",
      image:
        "https://i.pravatar.cc/150?img=44",
    },
  ];

  // =====================================================
  // SPECIAL OFFERS DATA
  // =====================================================

  const specialOffers = [
    {
      title: "Luxury Cars at $99/day!",
      description:
        "Drive luxury for just $99 a day this holiday season. Choose from top-tier cars and make every trip unforgettable.",
    },

    {
      title: "Weekend Luxury Deal",
      description:
        "Enjoy premium vehicles at special weekend rates. Perfect for road trips, events, and memorable journeys.",
    },

    {
      title: "Premium SUV Offer",
      description:
        "Travel with extra comfort and space. Book a premium SUV and enjoy a smooth and powerful driving experience.",
    },

    {
      title: "Holiday Special",
      description:
        "Treat yourself this holiday season with style, comfort, and performance at an affordable rental price.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: darkMode
          ? "#0f172a"
          : "#f8fafc",

        color: textColor,

        overflow: "hidden",

        transition: "all 0.3s ease",
      }}
    >

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <Box
        sx={{
          minHeight:
            "calc(100vh - 75px)",

          display: "flex",

          alignItems: "center",

          background: darkMode
            ? "linear-gradient(135deg, #0f172a 0%, #111827 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",

          transition:
            "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              alignItems: "center",

              gap: {
                xs: 5,
                md: 2,
              },

              py: {
                xs: 6,
                md: 8,
              },
            }}
          >

            {/* =================================================
                HERO LEFT
            ================================================= */}

            <Box>

              {/* Badge */}

              <Box
                sx={{
                  display:
                    "inline-flex",

                  alignItems:
                    "center",

                  gap: 0.8,

                  px: 1.8,

                  py: 0.8,

                  mb: 2.5,

                  borderRadius:
                    "50px",

                  backgroundColor:
                    darkMode
                      ? "rgba(37,99,235,0.15)"
                      : "#dbeafe",

                  color: "#2563eb",

                  fontSize: "14px",

                  fontWeight: 700,
                }}
              >
                <DirectionsCar
                  sx={{
                    fontSize: 19,
                  }}
                />

                Premium Car Rental
              </Box>

              {/* Heading */}

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "42px",
                    sm: "52px",
                    md: "64px",
                  },

                  lineHeight: 1.05,

                  fontWeight: 900,

                  letterSpacing:
                    "-2px",

                  color: textColor,

                  maxWidth:
                    "650px",

                  mb: 2.5,
                }}
              >
                Drive Your{" "}

                <Box
                  component="span"
                  sx={{
                    color:
                      "#2563eb",
                  }}
                >
                  Dreams
                </Box>{" "}

                Today!
              </Typography>

              {/* Subtitle */}

              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    md: "23px",
                  },

                  lineHeight: 1.4,

                  fontWeight: 600,

                  color: darkMode
                    ? "#d1d5db"
                    : "#374151",

                  maxWidth:
                    "600px",

                  mb: 2,
                }}
              >
                From city cruisers to luxury
                rides – discover the perfect
                match.
              </Typography>

              {/* Description */}

              <Typography
                sx={{
                  maxWidth:
                    "610px",

                  fontSize: "16px",

                  lineHeight: 1.8,

                  color:
                    secondaryText,

                  mb: 3,
                }}
              >
                Our exclusive lineup of premium
                cars is tailored for those who
                demand more than just a ride.
                Whether you're looking for
                luxury, performance, or
                sophistication, each vehicle in
                our collection is designed to
                elevate your driving experience.
              </Typography>

              {/* Buttons */}

              <Box
                sx={{
                  display: "flex",

                  gap: 1.5,

                  flexWrap: "wrap",

                  mb: 3,
                }}
              >

                <Button
                  component={Link}
                  to="/cars"
                  variant="contained"
                  endIcon={
                    <ArrowForward />
                  }
                  sx={{
                    px: 3,

                    py: 1.5,

                    borderRadius:
                      "10px",

                    textTransform:
                      "none",

                    fontSize:
                      "16px",

                    fontWeight: 700,

                    backgroundColor:
                      "#2563eb",

                    boxShadow:
                      "0 8px 20px rgba(37,99,235,0.25)",

                    "&:hover": {
                      backgroundColor:
                        "#1d4ed8",

                      transform:
                        "translateY(-2px)",
                    },

                    transition:
                      "0.3s",
                  }}
                >
                  View Available Cars
                </Button>

                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  sx={{
                    px: 3,

                    py: 1.5,

                    borderRadius:
                      "10px",

                    textTransform:
                      "none",

                    fontSize:
                      "16px",

                    fontWeight: 700,

                    borderColor:
                      darkMode
                        ? "#4b5563"
                        : "#cbd5e1",

                    color: textColor,

                    "&:hover": {
                      borderColor:
                        "#2563eb",

                      color:
                        "#2563eb",

                      backgroundColor:
                        darkMode
                          ? "rgba(37,99,235,0.1)"
                          : "#eff6ff",
                    },

                    transition:
                      "0.3s",
                  }}
                >
                  Learn More
                </Button>

              </Box>

              {/* Small Features */}

              <Box
                sx={{
                  display:
                    "flex",

                  gap: 2.5,

                  flexWrap:
                    "wrap",
                }}
              >
                {[
                  "Premium Cars",
                  "Easy Booking",
                  "24/7 Support",
                ].map(
                  (item) => (
                    <Box
                      key={item}
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 0.7,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color:
                            "#22c55e",

                          fontSize:
                            20,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "14px",

                          fontWeight:
                            600,

                          color:
                            secondaryText,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>

            </Box>

            {/* =================================================
                HERO RIGHT
            ================================================= */}

            <Box
              sx={{
                position:
                  "relative",

                display:
                  "flex",

                justifyContent:
                  "center",

                alignItems:
                  "center",

                minHeight: {
                  xs: "320px",
                  sm: "400px",
                  md: "500px",
                },
              }}
            >

              {/* Circle */}

              <Box
                sx={{
                  position:
                    "absolute",

                  width: {
                    xs: "280px",
                    sm: "390px",
                    md: "500px",
                  },

                  height: {
                    xs: "280px",
                    sm: "390px",
                    md: "500px",
                  },

                  borderRadius:
                    "50%",

                  background:
                    darkMode
                      ? "linear-gradient(135deg, rgba(37,99,235,.18), rgba(124,58,237,.15))"
                      : "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                }}
              />

              {/* Car Image */}

              <Box
                component="img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR9F66AUwrH2R7mWTlYLHxpP3d8S8s-BFCG_E5YHy4WqLazJoR3EIkfHZy20IpzydLTpLbiLoE4QGif0Dc"
                alt="Luxury Rental Car"
                sx={{
                  position:
                    "relative",

                  zIndex: 1,

                  width: {
                    xs: "100%",
                    sm: "95%",
                    md: "100%",
                  },

                  maxWidth:
                    "650px",

                  objectFit:
                    "contain",

                  filter:
                    darkMode
                      ? "drop-shadow(0 25px 30px rgba(0,0,0,.45))"
                      : "drop-shadow(0 25px 25px rgba(0,0,0,.18))",

                  transition:
                    "0.4s",

                  "&:hover": {
                    transform:
                      "translateY(-8px) scale(1.02)",
                  },
                }}
              />

              {/* Rating Card */}

              <Paper
                elevation={0}
                sx={{
                  position:
                    "absolute",

                  zIndex: 2,

                  top: "8%",

                  left: {
                    xs: "0%",
                    md: "2%",
                  },

                  display:
                    "flex",

                  alignItems:
                    "center",

                  gap: 1,

                  px: 2,

                  py: 1.3,

                  borderRadius:
                    "12px",

                  backgroundColor:
                    cardBg,

                  border:
                    `1px solid ${borderColor}`,

                  boxShadow:
                    darkMode
                      ? "0 15px 35px rgba(0,0,0,.35)"
                      : "0 12px 30px rgba(0,0,0,.1)",
                }}
              >

                <Box
                  sx={{
                    width: 35,

                    height: 35,

                    borderRadius:
                      "50%",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    backgroundColor:
                      darkMode
                        ? "#3f3420"
                        : "#fef3c7",
                  }}
                >
                  <Star
                    sx={{
                      color:
                        "#f59e0b",

                      fontSize: 20,
                    }}
                  />
                </Box>

                <Box>

                  <Typography
                    sx={{
                      fontWeight:
                        800,

                      color:
                        textColor,
                    }}
                  >
                    4.9 / 5
                  </Typography>

                  <Typography
                    sx={{
                      fontSize:
                        "11px",

                      color:
                        secondaryText,
                    }}
                  >
                    Customer Rating
                  </Typography>

                </Box>

              </Paper>

              {/* Price Card */}

              <Paper
                elevation={0}
                sx={{
                  position:
                    "absolute",

                  zIndex: 2,

                  bottom: "5%",

                  right: {
                    xs: "0%",
                    md: "0",
                  },

                  px: 2.5,

                  py: 1.7,

                  borderRadius:
                    "15px",

                  backgroundColor:
                    cardBg,

                  border:
                    `1px solid ${borderColor}`,

                  boxShadow:
                    darkMode
                      ? "0 15px 35px rgba(0,0,0,.4)"
                      : "0 15px 35px rgba(0,0,0,.12)",
                }}
              >

                <Typography
                  sx={{
                    fontSize:
                      "12px",

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

                    fontWeight:
                      800,

                    color:
                      textColor,
                  }}
                >
                  $49

                  <Box
                    component="span"
                    sx={{
                      fontSize:
                        "13px",

                      color:
                        secondaryText,

                      ml: 0.5,
                    }}
                  >
                    /day
                  </Box>
                </Typography>

              </Paper>

            </Box>

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 7,
            md: 10,
          },

          backgroundColor:
            sectionBg,
        }}
      >
        <Container maxWidth="lg">

          {/* Heading */}

          <Box
            sx={{
              textAlign:
                "center",

              maxWidth:
                "700px",

              mx: "auto",

              mb: 6,
            }}
          >

            <Typography
              sx={{
                color:
                  "#2563eb",

                fontWeight:
                  800,

                fontSize:
                  "14px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "1.5px",

                mb: 1,
              }}
            >
              Why Choose Us
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                fontWeight:
                  900,

                color:
                  textColor,

                mb: 1.5,
              }}
            >
              Everything You Need for a{" "}

              <Box
                component="span"
                sx={{
                  color:
                    "#2563eb",
                }}
              >
                Perfect Ride
              </Box>
            </Typography>

            <Typography
              sx={{
                color:
                  secondaryText,

                lineHeight:
                  1.7,
              }}
            >
              We make car rental simple,
              affordable, comfortable and
              reliable.
            </Typography>

          </Box>

          {/* Feature Cards */}

          <Box
            sx={{
              display:
                "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },

              gap: 2.5,
            }}
          >

            {features.map(
              (feature) => (
                <Paper
                  key={
                    feature.title
                  }
                  elevation={0}
                  sx={{
                    p: 3,

                    minHeight:
                      250,

                    borderRadius:
                      "18px",

                    backgroundColor:
                      darkMode
                        ? "#1f2937"
                        : "#f8fafc",

                    border:
                      `1px solid ${borderColor}`,

                    transition:
                      "all 0.3s ease",

                    "&:hover":
                      {
                        transform:
                          "translateY(-8px)",

                        borderColor:
                          "#2563eb",

                        boxShadow:
                          "0 15px 35px rgba(37,99,235,.12)",
                      },
                  }}
                >

                  <Box
                    sx={{
                      width: 55,

                      height: 55,

                      borderRadius:
                        "14px",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      backgroundColor:
                        darkMode
                          ? "rgba(37,99,235,.15)"
                          : "#dbeafe",

                      color:
                        "#2563eb",

                      mb: 2.5,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize:
                        "18px",

                      fontWeight:
                        800,

                      color:
                        textColor,

                      mb: 1.5,
                    }}
                  >
                    {
                      feature.title
                    }
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        secondaryText,

                      fontSize:
                        "14px",

                      lineHeight:
                        1.7,
                    }}
                  >
                    {
                      feature.description
                    }
                  </Typography>

                </Paper>
              )
            )}

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          CUSTOMER FEEDBACK
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 7,
            md: 10,
          },

          backgroundColor:
            darkMode
              ? "#0f172a"
              : "#f8fafc",
        }}
      >
        <Container maxWidth="lg">

          {/* Heading */}

          <Box
            sx={{
              textAlign:
                "center",

              mb: 6,
            }}
          >

            <Typography
              sx={{
                color:
                  "#2563eb",

                fontWeight:
                  800,

                fontSize:
                  "14px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "1.5px",

                mb: 1,
              }}
            >
              Feedbacks
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                fontWeight:
                  900,

                color:
                  textColor,
              }}
            >
              What Our Customers Say
            </Typography>

            <Typography
              sx={{
                color:
                  secondaryText,

                mt: 1,
              }}
            >
              Real experiences from our happy
              customers.
            </Typography>

          </Box>

          {/* Feedback Cards */}

          <Box
            sx={{
              display:
                "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
              },

              gap: 2.5,
            }}
          >

            {feedbacks.map(
              (feedback) => (
                <Paper
                  key={
                    feedback.name
                  }
                  elevation={0}
                  sx={{
                    p: 3,

                    borderRadius:
                      "20px",

                    backgroundColor:
                      cardBg,

                    border:
                      `1px solid ${borderColor}`,

                    position:
                      "relative",

                    transition:
                      "all 0.3s ease",

                    "&:hover":
                      {
                        transform:
                          "translateY(-8px)",

                        borderColor:
                          "#2563eb",

                        boxShadow:
                          darkMode
                            ? "0 20px 40px rgba(0,0,0,.35)"
                            : "0 20px 40px rgba(37,99,235,.12)",
                      },
                  }}
                >

                  {/* Quote */}

                  <Typography
                    sx={{
                      position:
                        "absolute",

                      top: 12,

                      right: 20,

                      fontSize:
                        "50px",

                      fontWeight:
                        900,

                      lineHeight: 1,

                      color:
                        darkMode
                          ? "rgba(37,99,235,.2)"
                          : "rgba(37,99,235,.1)",
                    }}
                  >
                    "
                  </Typography>

                  {/* Rating */}

                  <Rating
                    value={
                      feedback.rating
                    }
                    readOnly
                    size="small"
                    sx={{
                      mb: 2,
                    }}
                  />

                  {/* Review */}

                  <Typography
                    sx={{
                      color:
                        secondaryText,

                      lineHeight:
                        1.8,

                      fontSize:
                        "14px",

                      minHeight:
                        75,

                      mb: 2.5,
                    }}
                  >
                    "{feedback.text}"
                  </Typography>

                  {/* Customer */}

                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 1.5,
                    }}
                  >

                    <Avatar
                      src={
                        feedback.image
                      }
                      alt={
                        feedback.name
                      }
                      sx={{
                        width: 52,

                        height: 52,

                        border:
                          "2px solid #2563eb",

                        boxShadow:
                          "0 5px 15px rgba(37,99,235,0.2)",
                      }}
                    >
                      {
                        feedback.name.charAt(
                          0
                        )
                      }
                    </Avatar>

                    <Box>

                      <Typography
                        sx={{
                          fontWeight:
                            800,

                          color:
                            textColor,

                          fontSize:
                            "14px",
                        }}
                      >
                        {
                          feedback.name
                        }
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            secondaryText,

                          fontSize:
                            "12px",
                        }}
                      >
                        Verified Customer
                      </Typography>

                    </Box>

                  </Box>

                </Paper>
              )
            )}

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          SPECIAL OFFERS - 4 CARDS
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 7,
            md: 10,
          },

          backgroundColor:
            sectionBg,

          transition:
            "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">

          {/* Section Heading */}

          <Box
            sx={{
              textAlign:
                "center",

              maxWidth:
                "700px",

              mx: "auto",

              mb: 6,
            }}
          >

            <Typography
              sx={{
                color:
                  "#2563eb",

                fontWeight:
                  800,

                fontSize:
                  "14px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "1.5px",

                mb: 1,
              }}
            >
              Special Offers
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                fontWeight:
                  900,

                color:
                  textColor,

                mb: 1.5,
              }}
            >
              Exclusive Deals for{" "}

              <Box
                component="span"
                sx={{
                  color:
                    "#2563eb",
                }}
              >
                Your Next Ride
              </Box>
            </Typography>

            <Typography
              sx={{
                color:
                  secondaryText,

                lineHeight:
                  1.7,

                fontSize:
                  "16px",
              }}
            >
              Enjoy premium cars, affordable prices,
              and special deals designed to make
              every journey unforgettable.
            </Typography>

          </Box>

          {/* =================================================
              FOUR OFFER CARDS
          ================================================= */}

          <Box
            sx={{
              display:
                "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },

              gap: 2.5,
            }}
          >

            {specialOffers.map(
              (offer, index) => (
                <Paper
                  key={
                    offer.title
                  }
                  elevation={0}
                  sx={{
                    position:
                      "relative",

                    overflow:
                      "hidden",

                    p: 3,

                    minHeight:
                      320,

                    display:
                      "flex",

                    flexDirection:
                      "column",

                    justifyContent:
                      "space-between",

                    borderRadius:
                      "20px",

                    background:
                      darkMode
                        ? "linear-gradient(145deg, #172554, #1e1b4b)"
                        : "linear-gradient(145deg, #eff6ff, #eef2ff)",

                    border:
                      `1px solid ${
                        darkMode
                          ? "#312e81"
                          : "#dbeafe"
                      }`,

                    transition:
                      "all 0.3s ease",

                    "&:hover":
                      {
                        transform:
                          "translateY(-8px)",

                        boxShadow:
                          "0 20px 40px rgba(37,99,235,0.15)",

                        borderColor:
                          "#2563eb",
                      },
                  }}
                >

                  {/* Decorative Circle */}

                  <Box
                    sx={{
                      position:
                        "absolute",

                      width: 130,

                      height: 130,

                      borderRadius:
                        "50%",

                      backgroundColor:
                        "#2563eb",

                      opacity: 0.07,

                      right: -45,

                      top: -45,
                    }}
                  />

                  {/* Number */}

                  <Box
                    sx={{
                      position:
                        "relative",

                      width: 45,

                      height: 45,

                      borderRadius:
                        "14px",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      backgroundColor:
                        darkMode
                          ? "rgba(37,99,235,.2)"
                          : "#dbeafe",

                      color:
                        "#2563eb",

                      fontWeight:
                        900,

                      fontSize:
                        "18px",

                      mb: 2,
                    }}
                  >
                    0{index + 1}
                  </Box>

                  {/* Content */}

                  <Box
                    sx={{
                      position:
                        "relative",

                      zIndex: 1,

                      flexGrow: 1,
                    }}
                  >

                    {/* Label */}

                    <Box
                      sx={{
                        display:
                          "inline-flex",

                        alignItems:
                          "center",

                        gap: 0.7,

                        mb: 2,

                        px: 1.2,

                        py: 0.6,

                        borderRadius:
                          "50px",

                        backgroundColor:
                          darkMode
                            ? "rgba(255,255,255,.08)"
                            : "#ffffff",

                        color:
                          "#2563eb",

                        fontSize:
                          "12px",

                        fontWeight:
                          800,
                      }}
                    >
                      <LocalOffer
                        sx={{
                          fontSize:
                            16,
                        }}
                      />

                      Special Offer
                    </Box>

                    {/* Title */}

                    <Typography
                      component="h3"
                      sx={{
                        fontSize:
                          "21px",

                        lineHeight:
                          1.25,

                        fontWeight:
                          900,

                        color:
                          textColor,

                        mb: 1.5,
                      }}
                    >
                      {
                        offer.title
                      }
                    </Typography>

                    {/* Description */}

                    <Typography
                      sx={{
                        fontSize:
                          "14px",

                        lineHeight:
                          1.7,

                        color:
                          secondaryText,
                      }}
                    >
                      {
                        offer.description
                      }
                    </Typography>

                  </Box>

                  {/* Book Button */}

                  <Button
                    component={Link}
                    to="/cars"
                    variant="contained"
                    fullWidth
                    endIcon={
                      <ArrowForward />
                    }
                    sx={{
                      position:
                        "relative",

                      zIndex: 2,

                      mt: 3,

                      py: 1.2,

                      borderRadius:
                        "10px",

                      textTransform:
                        "none",

                      fontSize:
                        "14px",

                      fontWeight:
                        800,

                      backgroundColor:
                        "#2563eb",

                      boxShadow:
                        "0 8px 20px rgba(37,99,235,.2)",

                      "&:hover":
                        {
                          backgroundColor:
                            "#1d4ed8",

                          transform:
                            "translateY(-2px)",
                        },

                      transition:
                        "all 0.3s ease",
                    }}
                  >
                    Book Now
                  </Button>

                </Paper>
              )
            )}

          </Box>

        </Container>
      </Box>

    </Box>
  );
};

export default Home;