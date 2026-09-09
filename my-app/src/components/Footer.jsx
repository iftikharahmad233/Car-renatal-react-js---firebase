import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
  Phone,
  LocationOn,
  DirectionsCar,
} from "@mui/icons-material";

const Footer = ({ darkMode }) => {
  return (
    <Box
      component="footer"
      sx={{
    
        position: "relative",
        overflow: "hidden",

        // ================= BACKGROUND =================
        background: darkMode
          ? "linear-gradient(135deg, #080808 0%, #111827 50%, #0b0f19 100%)"
          : "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f8fafc 100%)",

        // ================= TEXT =================
        color: darkMode ? "#ffffff" : "#111827",

        // ================= BORDER =================
        borderTop: "1px solid",
        borderColor: darkMode
          ? "rgba(255,255,255,0.08)"
          : "#e5e7eb",

        transition: "all 0.3s ease",
      }}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          width: 350,
          height: 350,

          borderRadius: "50%",

          background: darkMode
            ? "rgba(37,99,235,0.12)"
            : "rgba(37,99,235,0.06)",

          filter: "blur(100px)",

          top: -150,
          left: -100,
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 300,
          height: 300,

          borderRadius: "50%",

          background: darkMode
            ? "rgba(220,38,38,0.10)"
            : "rgba(59,130,246,0.05)",

          filter: "blur(100px)",

          bottom: -150,
          right: -100,
        }}
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,

          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Grid container spacing={5}>

          {/* =================================================
              BRAND
          ================================================= */}

          <Grid item xs={12} md={4}>
            {/* CAR IMAGE */}

            <Box
              sx={{
                width: "100%",

                height: {
                  xs: 180,
                  sm: 220,
                  md: 190,
                },

                borderRadius: "20px",

                overflow: "hidden",

                mb: 3,

                position: "relative",

                boxShadow: darkMode
                  ? "0 15px 40px rgba(0,0,0,0.45)"
                  : "0 15px 40px rgba(0,0,0,0.12)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80"
                alt="Car Rental"
                sx={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  transition: "transform 0.5s ease",

                  "&:hover": {
                    transform: "scale(1.06)",
                  },
                }}
              />

              {/* IMAGE OVERLAY */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background: darkMode
                    ? "linear-gradient(to top, rgba(0,0,0,0.75), transparent)"
                    : "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                }}
              />

              {/* IMAGE TEXT */}

              <Box
                sx={{
                  position: "absolute",

                  bottom: 18,
                  left: 20,

                  display: "flex",
                  alignItems: "center",

                  gap: 1,
                }}
              >
                <DirectionsCar
                  sx={{
                    fontSize: 30,
                    color: "#60a5fa",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "1.5rem",

                    fontWeight: 800,

                    letterSpacing: "1px",

                    color: "#ffffff",
                  }}
                >
                  Car Rental
                </Typography>
              </Box>
            </Box>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: darkMode
                  ? "#9ca3af"
                  : "#6b7280",

                lineHeight: 1.8,

                maxWidth: 420,
              }}
            >
              Find the perfect car for your journey.
              Easy booking, comfortable rides and
              reliable vehicles at affordable prices.
            </Typography>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 3,
              }}
            >
              {/* Facebook */}

              <IconButton
                sx={{
                  color: darkMode
                    ? "#ffffff"
                    : "#374151",

                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "#e5e7eb",

                  "&:hover": {
                    backgroundColor: "#1877f2",

                    color: "#ffffff",

                    transform: "translateY(-3px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                <Facebook />
              </IconButton>

              {/* Instagram */}

              <IconButton
                sx={{
                  color: darkMode
                    ? "#ffffff"
                    : "#374151",

                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "#e5e7eb",

                  "&:hover": {
                    backgroundColor: "#e1306c",

                    color: "#ffffff",

                    transform: "translateY(-3px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                <Instagram />
              </IconButton>

              {/* Twitter */}

              <IconButton
                sx={{
                  color: darkMode
                    ? "#ffffff"
                    : "#374151",

                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "#e5e7eb",

                  "&:hover": {
                    backgroundColor: "#1da1f2",

                    color: "#ffffff",

                    transform: "translateY(-3px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                <Twitter />
              </IconButton>

              {/* YouTube */}

              <IconButton
                sx={{
                  color: darkMode
                    ? "#ffffff"
                    : "#374151",

                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "#e5e7eb",

                  "&:hover": {
                    backgroundColor: "#ff0000",

                    color: "#ffffff",

                    transform: "translateY(-3px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <Grid item xs={12} sm={4} md={2}>
            <Typography
              sx={{
                fontSize: "1.1rem",

                fontWeight: 800,

                mb: 2.5,

                color: darkMode
                  ? "#ffffff"
                  : "#111827",
              }}
            >
              Quick Links
            </Typography>

            {[
              { name: "Home", path: "/" },
              { name: "Cars", path: "/cars" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Booking", path: "/booking" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode
                      ? "#9ca3af"
                      : "#6b7280",

                    mb: 1.5,

                    transition: "all 0.3s ease",

                    "&:hover": {
                      color: "#2563eb",

                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Grid>

          {/* =================================================
              SERVICES
          ================================================= */}

          <Grid item xs={12} sm={4} md={2}>
            <Typography
              sx={{
                fontSize: "1.1rem",

                fontWeight: 800,

                mb: 2.5,

                color: darkMode
                  ? "#ffffff"
                  : "#111827",
              }}
            >
              Services
            </Typography>

            {[
              "Car Rental",
              "Daily Rental",
              "Weekly Rental",
              "Airport Pickup",
              "Luxury Cars",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: darkMode
                    ? "#9ca3af"
                    : "#6b7280",

                  mb: 1.5,

                  cursor: "pointer",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#2563eb",

                    transform: "translateX(5px)",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* =================================================
              CONTACT
          ================================================= */}

          <Grid item xs={12} sm={4} md={4}>
            <Typography
              sx={{
                fontSize: "1.1rem",

                fontWeight: 800,

                mb: 2.5,

                color: darkMode
                  ? "#ffffff"
                  : "#111827",
              }}
            >
              Contact Us
            </Typography>

            {/* EMAIL */}

            <Box
              sx={{
                display: "flex",

                gap: 1.5,

                alignItems: "flex-start",

                mb: 2,
              }}
            >
              <Email
                sx={{
                  color: "#60a5fa",
                  mt: 0.3,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: darkMode
                      ? "#6b7280"
                      : "#9ca3af",

                    fontSize: "0.8rem",
                  }}
                >
                  Email
                </Typography>

                <Typography
                  sx={{
                    color: darkMode
                      ? "#d1d5db"
                      : "#374151",

                    fontSize: "0.95rem",

                    wordBreak: "break-word",
                  }}
                >
                  iftikhar.dev@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* PHONE */}

            <Box
              sx={{
                display: "flex",

                gap: 1.5,

                alignItems: "flex-start",

                mb: 2,
              }}
            >
              <Phone
                sx={{
                  color: "#60a5fa",
                  mt: 0.3,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: darkMode
                      ? "#6b7280"
                      : "#9ca3af",

                    fontSize: "0.8rem",
                  }}
                >
                  Phone
                </Typography>

                <Typography
                  sx={{
                    color: darkMode
                      ? "#d1d5db"
                      : "#374151",
                  }}
                >
                  +92 300 1234567
                </Typography>
              </Box>
            </Box>

            {/* LOCATION */}

            <Box
              sx={{
                display: "flex",

                gap: 1.5,

                alignItems: "flex-start",
              }}
            >
              <LocationOn
                sx={{
                  color: "#60a5fa",
                  mt: 0.3,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: darkMode
                      ? "#6b7280"
                      : "#9ca3af",

                    fontSize: "0.8rem",
                  }}
                >
                  Location
                </Typography>

                <Typography
                  sx={{
                    color: darkMode
                      ? "#d1d5db"
                      : "#374151",
                  }}
                >
                  Lahore, Pakistan
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <Divider
          sx={{
            my: 5,

            borderColor: darkMode
              ? "rgba(255,255,255,0.08)"
              : "#e5e7eb",
          }}
        />

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            gap: 2,

            flexDirection: {
              xs: "column",
              md: "row",
            },

            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            sx={{
              color: darkMode
                ? "#6b7280"
                : "#9ca3af",

              fontSize: "0.9rem",
            }}
          >
            Copyright © 2026 - All rights reserved by
            car-rental.org
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            <Link
              to="/privacy"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  color: darkMode
                    ? "#6b7280"
                    : "#9ca3af",

                  fontSize: "0.85rem",

                  "&:hover": {
                    color: "#2563eb",
                  },
                }}
              >
                Privacy Policy
              </Typography>
            </Link>

            <Link
              to="/terms"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  color: darkMode
                    ? "#6b7280"
                    : "#9ca3af",

                  fontSize: "0.85rem",

                  "&:hover": {
                    color: "#2563eb",
                  },
                }}
              >
                Terms & Conditions
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;