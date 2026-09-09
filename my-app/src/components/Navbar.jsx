import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:900px)");

  // ================= NAVIGATION LINKS =================
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Available Cars",
      path: "/cars",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Contact Me",
      path: "/contact",
    },
  ];

  // ================= MOBILE MENU =================
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ================= THEME TOGGLE =================
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: darkMode ? "#111827" : "#ffffff",
          color: darkMode ? "#ffffff" : "#111827",

          borderBottom: "1px solid",

          borderColor: darkMode
            ? "#374151"
            : "#e5e7eb",

          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: "75px !important",

              display: "flex",

              justifyContent: "space-between",
            }}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 1.2,

                textDecoration: "none",

                color: "inherit",
              }}
            >
              {/* Car Image */}

              <Box
                sx={{
                  width: 44,

                  height: 44,

                  borderRadius: "12px",

                  overflow: "hidden",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  backgroundColor: "#f3f4f6",

                  border: "1px solid",

                  borderColor: darkMode
                    ? "#374151"
                    : "#e5e7eb",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8iSxs6U2iViKj8TzRFzj6tXu3NobaiwAxrNobDQDq6fZKGmmP3hCtho&s=10"
                  alt="Car Rental"
                  style={{
                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              </Box>

              {/* Logo Text */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,

                  letterSpacing: "-0.5px",

                  whiteSpace: "nowrap",
                }}
              >
                Car
                <span
                  style={{
                    color: "#2563eb",
                  }}
                >
                  Rental
                </span>
              </Typography>
            </Box>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  gap: 1,
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: "inherit",

                      fontWeight: 600,

                      fontSize: "15px",

                      textTransform: "none",

                      px: 2,

                      borderRadius: "8px",

                      "&:hover": {
                        color: "#2563eb",

                        backgroundColor: darkMode
                          ? "rgba(37, 99, 235, 0.12)"
                          : "rgba(37, 99, 235, 0.06)",
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 1,
              }}
            >
              {/* =================================================
                  THEME TOGGLE
              ================================================= */}

              <IconButton
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
                sx={{
                  color: "inherit",

                  border: "1px solid",

                  borderColor: darkMode
                    ? "#374151"
                    : "#e5e7eb",

                  width: 42,

                  height: 42,

                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: darkMode
                      ? "#1f2937"
                      : "#f3f4f6",

                    transform: "rotate(15deg)",
                  },
                }}
              >
                {darkMode ? (
                  <LightMode />
                ) : (
                  <DarkMode />
                )}
              </IconButton>

              {/* =================================================
                  DESKTOP LOGIN + REGISTER
              ================================================= */}

              {!isMobile && (
                <>
                  {/* Login */}

                  <Button
                    onClick={() => navigate("/login")}
                    sx={{
                      color: "inherit",

                      fontWeight: 600,

                      textTransform: "none",

                      px: 2,

                      borderRadius: "8px",

                      "&:hover": {
                        color: "#2563eb",
                      },
                    }}
                  >
                    Login
                  </Button>

                  {/* Register */}

                  <Button
                    onClick={() => navigate("/register")}
                    variant="contained"
                    sx={{
                      backgroundColor: "#2563eb",

                      textTransform: "none",

                      fontWeight: 600,

                      borderRadius: "9px",

                      px: 2.5,

                      boxShadow:
                        "0 4px 12px rgba(37, 99, 235, 0.25)",

                      "&:hover": {
                        backgroundColor: "#1d4ed8",

                        boxShadow:
                          "0 6px 16px rgba(37, 99, 235, 0.35)",
                      },
                    }}
                  >
                    Register
                  </Button>
                </>
              )}

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  aria-label="Open menu"
                  sx={{
                    color: "inherit",

                    width: 5,

                    height: 5,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: 280,

            height: "100%",

            backgroundColor: darkMode
              ? "#111827"
              : "#ffffff",

            color: darkMode
              ? "#ffffff"
              : "#111827",
          }}
        >
          {/* =================================================
              DRAWER HEADER
          ================================================= */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "center",

              p: 2,

              borderBottom: "1px solid",

              borderColor: darkMode
                ? "#374151"
                : "#e5e7eb",
            }}
          >
            {/* Drawer Logo */}

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 36,

                  height: 36,

                  borderRadius: "9px",

                  overflow: "hidden",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8iSxs6U2iViKj8TzRFzj6tXu3NobaiwAxrNobDQDq6fZKGmmP3hCtho&s=10"
                  alt="Car Rental"
                  style={{
                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              </Box>

              <Typography
                fontWeight={700}
              >
                Car Rental
              </Typography>
            </Box>

            {/* Close Button */}

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "inherit",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <List
            sx={{
              px: 1,

              py: 2,
            }}
          >
            {navLinks.map((link) => (
              <ListItem
                key={link.name}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: "8px",

                    mb: 0.5,

                    "&:hover": {
                      color: "#2563eb",

                      backgroundColor: darkMode
                        ? "#1f2937"
                        : "#f3f4f6",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontWeight: 2600,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* =================================================
              MOBILE AUTH BUTTONS
          ================================================= */}

          <Box
            sx={{
              px: 2,
            }}
          >
            {/* Login */}

            <Button
              fullWidth
              onClick={() => {
                navigate("/login");

                handleDrawerToggle();
              }}
              sx={{
                mb: 1,

                color: "inherit",

                textTransform: "none",

                fontWeight: 600,

                borderRadius: "8px",
              }}
            >
              Login
            </Button>

            {/* Register */}

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/register");

                handleDrawerToggle();
              }}
              sx={{
                textTransform: "none",

                fontWeight: 600,

                borderRadius: "8px",

                backgroundColor: "#2563eb",

                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
