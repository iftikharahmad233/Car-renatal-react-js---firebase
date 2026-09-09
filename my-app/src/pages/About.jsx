import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Avatar,
} from "@mui/material";

import {
  DirectionsCar,
  ArrowForward,
  CheckCircle,
  Verified,
  Security,
  SupportAgent,
  EventAvailable,
  LocalOffer,
  Speed,
  WorkspacePremium,
  People,
  EmojiEvents,
} from "@mui/icons-material";

const About = ({ darkMode }) => {
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

  const pageBg = darkMode
    ? "#0f172a"
    : "#f8fafc";

  const sectionBg = darkMode
    ? "#111827"
    : "#ffffff";

  // =====================================================
  // COMPANY FEATURES
  // =====================================================

  const features = [
    {
      icon: <Verified />,
      title: "Trusted Vehicles",
      description:
        "All our cars are carefully inspected and maintained to provide you with a safe and comfortable journey.",
    },

    {
      icon: <Security />,
      title: "Safe & Secure",
      description:
        "Your safety is our priority. We provide reliable vehicles and a secure booking experience.",
    },

    {
      icon: <SupportAgent />,
      title: "24/7 Support",
      description:
        "Our friendly customer support team is always available to help you whenever you need us.",
    },

    {
      icon: <EventAvailable />,
      title: "Easy Booking",
      description:
        "Book your favorite car quickly through our simple and user-friendly booking process.",
    },
  ];

  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      icon: <DirectionsCar />,
      title: "Car Rental",
      description:
        "Choose from economy, luxury, SUV and sports cars for your daily travel or special occasions.",
    },

    {
      icon: <LocalOffer />,
      title: "Affordable Pricing",
      description:
        "Enjoy competitive daily rental prices with transparent costs and no unnecessary hidden charges.",
    },

    {
      icon: <Speed />,
      title: "Premium Experience",
      description:
        "Enjoy clean, comfortable and well-maintained vehicles for a smooth driving experience.",
    },
  ];

  // =====================================================
  // STATISTICS
  // =====================================================

  const statistics = [
    {
      icon: <DirectionsCar />,
      number: "100+",
      title: "Cars Available",
    },

    {
      icon: <People />,
      number: "5K+",
      title: "Happy Customers",
    },

    {
      icon: <EmojiEvents />,
      number: "10+",
      title: "Years Experience",
    },

    {
      icon: <WorkspacePremium />,
      number: "4.9/5",
      title: "Customer Rating",
    },
  ];

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
        overflow: "hidden",
      }}
    >

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          background: darkMode
            ? "linear-gradient(135deg,#0f172a 0%,#111827 50%,#172554 100%)"
            : "linear-gradient(135deg,#f8fafc 0%,#eff6ff 50%,#eef2ff 100%)",

          py: {
            xs: 7,
            md: 11,
          },
        }}
      >

        {/* Decorative Circle */}

        <Box
          sx={{
            position: "absolute",

            width: 350,
            height: 350,

            borderRadius: "50%",

            backgroundColor: "#2563eb",

            opacity: darkMode ? 0.08 : 0.06,

            right: -120,
            top: -150,
          }}
        />

        <Container maxWidth="lg">

          <Box
            sx={{
              position: "relative",
              zIndex: 1,

              textAlign: "center",

              maxWidth: "850px",

              mx: "auto",
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

                mb: 2.5,

                borderRadius: "50px",

                backgroundColor: darkMode
                  ? "rgba(37,99,235,.15)"
                  : "#dbeafe",

                color: "#2563eb",

                fontWeight: 800,

                fontSize: "14px",
              }}
            >
              <DirectionsCar
                sx={{
                  fontSize: 20,
                }}
              />

              About Our Company
            </Box>

            {/* Heading */}

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "38px",
                  sm: "50px",
                  md: "64px",
                },

                fontWeight: 900,

                lineHeight: 1.05,

                letterSpacing: "-2px",

                color: textColor,

                mb: 2.5,
              }}
            >
              Your Journey,

              <Box
                component="span"
                sx={{
                  color: "#2563eb",
                }}
              >
                {" "}Our Passion
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                color: secondaryText,

                fontSize: {
                  xs: "16px",
                  md: "19px",
                },

                lineHeight: 1.8,

                maxWidth: "720px",

                mx: "auto",

                mb: 3.5,
              }}
            >
              We make car rental simple, comfortable and
              reliable. From everyday city trips to luxury
              journeys, we provide quality vehicles that
              match your needs and budget.
            </Typography>

            {/* Button */}

            <Button
              component={Link}
              to="/cars"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                px: 3.5,

                py: 1.5,

                borderRadius: "12px",

                textTransform: "none",

                fontSize: "16px",

                fontWeight: 800,

                backgroundColor: "#2563eb",

                boxShadow:
                  "0 10px 25px rgba(37,99,235,.25)",

                "&:hover": {
                  backgroundColor: "#1d4ed8",

                  transform:
                    "translateY(-3px)",
                },

                transition: "0.3s",
              }}
            >
              Explore Our Cars
            </Button>

          </Box>
        </Container>
      </Box>


      {/* =====================================================
          ABOUT COMPANY
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 7,
            md: 11,
          },

          backgroundColor: sectionBg,
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              gap: {
                xs: 5,
                md: 8,
              },

              alignItems: "center",
            }}
          >

            {/* LEFT IMAGE */}

            <Box
              sx={{
                position: "relative",
              }}
            >

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80"
                alt="Car Rental"
                sx={{
                  width: "100%",

                  height: {
                    xs: 320,
                    md: 450,
                  },

                  objectFit: "cover",

                  borderRadius: "25px",

                  display: "block",

                  boxShadow: darkMode
                    ? "0 25px 50px rgba(0,0,0,.35)"
                    : "0 25px 50px rgba(15,23,42,.12)",
                }}
              />

              {/* Experience Card */}

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",

                  bottom: {
                    xs: -20,
                    md: 25,
                  },

                  right: {
                    xs: 15,
                    md: -25,
                  },

                  p: 2.5,

                  minWidth: 160,

                  borderRadius: "18px",

                  backgroundColor: cardBg,

                  border:
                    `1px solid ${borderColor}`,

                  boxShadow: darkMode
                    ? "0 15px 35px rgba(0,0,0,.35)"
                    : "0 15px 35px rgba(0,0,0,.12)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: "32px",

                    fontWeight: 900,

                    color: "#2563eb",
                  }}
                >
                  10+
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",

                    fontWeight: 700,

                    color: textColor,
                  }}
                >
                  Years of Experience
                </Typography>

              </Paper>
            </Box>


            {/* RIGHT CONTENT */}

            <Box>

              <Typography
                sx={{
                  color: "#2563eb",

                  fontSize: "14px",

                  fontWeight: 800,

                  textTransform:
                    "uppercase",

                  letterSpacing: "1.5px",

                  mb: 1,
                }}
              >
                Who We Are
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "32px",
                    md: "44px",
                  },

                  fontWeight: 900,

                  lineHeight: 1.15,

                  color: textColor,

                  mb: 2,
                }}
              >
                More Than Just a
                <Box
                  component="span"
                  sx={{
                    color: "#2563eb",
                  }}
                >
                  {" "}Car Rental
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: secondaryText,

                  lineHeight: 1.8,

                  fontSize: "15px",

                  mb: 2,
                }}
              >
                We believe renting a car should be easy,
                transparent and enjoyable. That's why we
                created a platform where customers can
                quickly find and book the perfect vehicle
                for their journey.
              </Typography>

              <Typography
                sx={{
                  color: secondaryText,

                  lineHeight: 1.8,

                  fontSize: "15px",

                  mb: 3,
                }}
              >
                Our fleet includes reliable economy cars,
                spacious SUVs, premium luxury vehicles
                and exciting sports cars. Every vehicle
                is selected and maintained with customer
                satisfaction in mind.
              </Typography>


              {/* Points */}

              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: 1.5,

                  mb: 3,
                }}
              >

                {[
                  "Well-maintained and clean vehicles",

                  "Simple and transparent pricing",

                  "Fast and easy booking process",

                  "Professional customer support",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: 1,
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#22c55e",

                        fontSize: 20,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          secondaryText,

                        fontSize:
                          "14px",

                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

              </Box>

              <Button
                component={Link}
                to="/cars"
                variant="outlined"
                endIcon={<ArrowForward />}
                sx={{
                  borderRadius: "10px",

                  px: 3,

                  py: 1.2,

                  textTransform: "none",

                  fontWeight: 700,

                  borderColor:
                    darkMode
                      ? "#4b5563"
                      : "#cbd5e1",

                  color: textColor,

                  "&:hover": {
                    borderColor:
                      "#2563eb",

                    color: "#2563eb",

                    backgroundColor:
                      darkMode
                        ? "rgba(37,99,235,.1)"
                        : "#eff6ff",
                  },
                }}
              >
                View Our Fleet
              </Button>

            </Box>

          </Box>

        </Container>
      </Box>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 6,
            md: 8,
          },

          backgroundColor: darkMode
            ? "#0f172a"
            : "#f8fafc",
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },

              gap: 2,
            }}
          >

            {statistics.map((stat) => (
              <Paper
                key={stat.title}
                elevation={0}
                sx={{
                  p: {
                    xs: 2,
                    md: 3,
                  },

                  textAlign: "center",

                  borderRadius: "18px",

                  backgroundColor:
                    cardBg,

                  border:
                    `1px solid ${borderColor}`,

                  transition:
                    "0.3s",

                  "&:hover": {
                    transform:
                      "translateY(-6px)",

                    borderColor:
                      "#2563eb",
                  },
                }}
              >

                <Box
                  sx={{
                    width: 55,

                    height: 55,

                    mx: "auto",

                    mb: 1.5,

                    borderRadius:
                      "14px",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    backgroundColor:
                      darkMode
                        ? "rgba(37,99,235,.15)"
                        : "#dbeafe",

                    color: "#2563eb",
                  }}
                >
                  {stat.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "24px",
                      md: "30px",
                    },

                    fontWeight: 900,

                    color: textColor,
                  }}
                >
                  {stat.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",

                    color:
                      secondaryText,

                    fontWeight: 600,
                  }}
                >
                  {stat.title}
                </Typography>

              </Paper>
            ))}

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
            md: 11,
          },

          backgroundColor: sectionBg,
        }}
      >
        <Container maxWidth="lg">

          {/* Heading */}

          <Box
            sx={{
              textAlign: "center",

              maxWidth: "700px",

              mx: "auto",

              mb: 6,
            }}
          >

            <Typography
              sx={{
                color: "#2563eb",

                fontSize: "14px",

                fontWeight: 800,

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

                fontWeight: 900,

                color: textColor,

                mb: 1.5,
              }}
            >
              Why Customers
              <Box
                component="span"
                sx={{
                  color: "#2563eb",
                }}
              >
                {" "}Choose Us
              </Box>
            </Typography>

            <Typography
              sx={{
                color: secondaryText,

                lineHeight: 1.7,
              }}
            >
              We focus on quality, reliability and
              customer satisfaction in everything we do.
            </Typography>

          </Box>


          {/* Feature Cards */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },

              gap: 2.5,
            }}
          >

            {features.map((feature) => (
              <Paper
                key={feature.title}
                elevation={0}
                sx={{
                  p: 3,

                  minHeight: 245,

                  borderRadius: "18px",

                  backgroundColor:
                    darkMode
                      ? "#1f2937"
                      : "#f8fafc",

                  border:
                    `1px solid ${borderColor}`,

                  transition:
                    "all 0.3s ease",

                  "&:hover": {
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

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    borderRadius:
                      "14px",

                    backgroundColor:
                      darkMode
                        ? "rgba(37,99,235,.15)"
                        : "#dbeafe",

                    color: "#2563eb",

                    mb: 2.5,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "18px",

                    fontWeight: 800,

                    color: textColor,

                    mb: 1.5,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",

                    lineHeight: 1.7,

                    color: secondaryText,
                  }}
                >
                  {feature.description}
                </Typography>

              </Paper>
            ))}

          </Box>

        </Container>
      </Box>


      {/* =====================================================
          SERVICES
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

          <Box
            sx={{
              textAlign: "center",

              mb: 6,
            }}
          >

            <Typography
              sx={{
                color: "#2563eb",

                fontWeight: 800,

                fontSize: "14px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "1.5px",

                mb: 1,
              }}
            >
              Our Services
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                fontWeight: 900,

                color: textColor,
              }}
            >
              Everything You Need
            </Typography>

          </Box>


          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },

              gap: 3,
            }}
          >

            {services.map((service) => (
              <Paper
                key={service.title}
                elevation={0}
                sx={{
                  p: 4,

                  textAlign: "center",

                  borderRadius: "20px",

                  backgroundColor:
                    cardBg,

                  border:
                    `1px solid ${borderColor}`,

                  transition:
                    "0.3s",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",

                    borderColor:
                      "#2563eb",

                    boxShadow:
                      darkMode
                        ? "0 20px 40px rgba(0,0,0,.3)"
                        : "0 20px 40px rgba(37,99,235,.1)",
                  },
                }}
              >

                <Box
                  sx={{
                    width: 70,

                    height: 70,

                    mx: "auto",

                    mb: 2.5,

                    borderRadius:
                      "20px",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    backgroundColor:
                      darkMode
                        ? "rgba(37,99,235,.15)"
                        : "#dbeafe",

                    color: "#2563eb",
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "20px",

                    fontWeight: 800,

                    color: textColor,

                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color:
                      secondaryText,

                    fontSize: "14px",

                    lineHeight: 1.8,
                  }}
                >
                  {service.description}
                </Typography>

              </Paper>
            ))}

          </Box>

        </Container>
      </Box>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 7,
            md: 10,
          },

          backgroundColor: sectionBg,
        }}
      >
        <Container maxWidth="lg">

          <Paper
            elevation={0}
            sx={{
              position: "relative",

              overflow: "hidden",

              textAlign: "center",

              borderRadius: {
                xs: "22px",
                md: "30px",
              },

              p: {
                xs: 4,
                md: 7,
              },

              background: darkMode
                ? "linear-gradient(135deg,#172554,#1e1b4b)"
                : "linear-gradient(135deg,#eff6ff,#eef2ff)",

              border:
                `1px solid ${
                  darkMode
                    ? "#312e81"
                    : "#dbeafe"
                }`,
            }}
          >

            {/* Decorative Circle */}

            <Box
              sx={{
                position: "absolute",

                width: 280,

                height: 280,

                borderRadius: "50%",

                backgroundColor:
                  "#2563eb",

                opacity: 0.08,

                right: -100,

                top: -120,
              }}
            />

            <Box
              sx={{
                position:
                  "relative",

                zIndex: 1,
              }}
            >

              <Typography
                sx={{
                  color: "#2563eb",

                  fontWeight: 800,

                  fontSize: "14px",

                  textTransform:
                    "uppercase",

                  letterSpacing:
                    "1.5px",

                  mb: 1.5,
                }}
              >
                Start Your Journey
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "32px",
                    md: "48px",
                  },

                  fontWeight: 900,

                  lineHeight: 1.1,

                  color: textColor,

                  mb: 2,
                }}
              >
                Ready to Hit the Road?
              </Typography>

              <Typography
                sx={{
                  maxWidth: "650px",

                  mx: "auto",

                  color:
                    secondaryText,

                  lineHeight: 1.8,

                  mb: 3,
                }}
              >
                Find your perfect car and enjoy a smooth,
                comfortable and unforgettable journey.
              </Typography>

              <Button
                component={Link}
                to="/cars"
                variant="contained"
                endIcon={
                  <ArrowForward />
                }
                sx={{
                  px: 3.5,

                  py: 1.5,

                  borderRadius: "10px",

                  textTransform:
                    "none",

                  fontSize: "16px",

                  fontWeight: 800,

                  backgroundColor:
                    "#2563eb",

                  "&:hover": {
                    backgroundColor:
                      "#1d4ed8",

                    transform:
                      "translateY(-2px)",
                  },

                  transition: "0.3s",
                }}
              >
                Browse Available Cars
              </Button>

            </Box>

          </Paper>

        </Container>
      </Box>

    </Box>
  );
};

export default About;