import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Divider,
} from "@mui/material";

import {
  Send,
  Email,
  Phone,
  LocationOn,
  AccessTime,
  DirectionsCar,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

const Contact = ({ darkMode }) => {
  // =====================================================
  // THEME COLORS
  // =====================================================

  const textColor = darkMode ? "#ffffff" : "#111827";

  const secondaryText = darkMode ? "#9ca3af" : "#6b7280";

  const cardBg = darkMode ? "#1f2937" : "#ffffff";

  const borderColor = darkMode ? "#374151" : "#e5e7eb";

  const pageBg = darkMode ? "#0f172a" : "#f8fafc";

  const inputBg = darkMode ? "#111827" : "#ffffff";

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // =====================================================
  // SUCCESS MESSAGE
  // =====================================================

  const [openSnackbar, setOpenSnackbar] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =====================================================
  // HANDLE FORM SUBMIT
  // =====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success message
    setOpenSnackbar(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email Us",
      value: "iftikhar@gamil.com",
      description: "Send us an email anytime",
    },

    {
      icon: <Phone />,
      title: "Call Us",
      value: "+1 234 567 890",
      description: "Mon - Sun, 24/7 Support",
    },

    {
      icon: <LocationOn />,
      title: "Visit Us",
      value: "Swat",
      description: "123 Car Street, NY",
    },

    {
      icon: <AccessTime />,
      title: "Working Hours",
      value: "24/7 Available",
      description: "We're always here for you",
    },
  ];

  // =====================================================
  // TEXT FIELD STYLE
  // =====================================================

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",

      backgroundColor: inputBg,

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

    "& textarea": {
      color: textColor,
    },

    "& input": {
      color: textColor,
    },
  };

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

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <Box
          sx={{
            textAlign: "center",

            maxWidth: "750px",

            mx: "auto",

            mb: {
              xs: 5,
              md: 7,
            },
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
            <DirectionsCar
              sx={{
                fontSize: 20,
              }}
            />

            Get In Touch
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
            Contact{" "}
            <Box
              component="span"
              sx={{
                color: "#2563eb",
              }}
            >
              Us
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
            Have a question about our cars or booking process?
            Our friendly team is ready to help you anytime.
          </Typography>
        </Box>

        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },

            gap: 2.5,

            mb: 6,
          }}
        >
          {contactInfo.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                p: 3,

                borderRadius: "18px",

                backgroundColor: cardBg,

                border: `1px solid ${borderColor}`,

                textAlign: "center",

                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",

                  borderColor: "#2563eb",

                  boxShadow:
                    "0 15px 35px rgba(37,99,235,.12)",
                },
              }}
            >
              {/* Icon */}

              <Box
                sx={{
                  width: 55,

                  height: 55,

                  mx: "auto",

                  mb: 2,

                  borderRadius: "15px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  backgroundColor: darkMode
                    ? "rgba(37,99,235,.15)"
                    : "#dbeafe",

                  color: "#2563eb",
                }}
              >
                {item.icon}
              </Box>

              {/* Title */}

              <Typography
                sx={{
                  fontWeight: 800,

                  fontSize: "17px",

                  color: textColor,

                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>

              {/* Value */}

              <Typography
                sx={{
                  fontWeight: 700,

                  color: "#2563eb",

                  fontSize: "14px",

                  mb: 0.5,
                }}
              >
                {item.value}
              </Typography>

              {/* Description */}

              <Typography
                sx={{
                  color: secondaryText,

                  fontSize: "12px",
                }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* =====================================================
            CONTACT FORM + SIDE INFORMATION
        ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 1fr",
            },

            gap: 3,

            alignItems: "stretch",
          }}
        >

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 5,
              },

              borderRadius: "22px",

              backgroundColor: cardBg,

              border: `1px solid ${borderColor}`,

              boxShadow: darkMode
                ? "0 15px 35px rgba(0,0,0,.25)"
                : "0 15px 35px rgba(0,0,0,.05)",
            }}
          >
            {/* Form Heading */}

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "26px",
                  md: "32px",
                },

                fontWeight: 900,

                color: textColor,

                mb: 1,
              }}
            >
              Send Us a Message
            </Typography>

            <Typography
              sx={{
                color: secondaryText,

                fontSize: "14px",

                lineHeight: 1.7,

                mb: 3,
              }}
            >
              Fill out the form below and our team will
              get back to you as soon as possible.
            </Typography>

            <Divider
              sx={{
                borderColor: borderColor,

                mb: 3,
              }}
            />

            {/* Form */}

            <Box
              component="form"
              onSubmit={handleSubmit}
            >
              {/* Name + Email */}

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },

                  gap: 2,

                  mb: 2,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  sx={textFieldStyle}
                />

                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  sx={textFieldStyle}
                />
              </Box>

              {/* Phone + Subject */}

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },

                  gap: 2,

                  mb: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  sx={textFieldStyle}
                />

                <TextField
                  fullWidth
                  required
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  sx={textFieldStyle}
                />
              </Box>

              {/* Message */}

              <TextField
                fullWidth
                required
                multiline
                rows={6}
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                sx={{
                  ...textFieldStyle,

                  mb: 2.5,
                }}
              />

              {/* Submit Button */}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<Send />}
                sx={{
                  py: 1.5,

                  borderRadius: "12px",

                  textTransform: "none",

                  fontSize: "16px",

                  fontWeight: 800,

                  backgroundColor: "#2563eb",

                  boxShadow:
                    "0 8px 20px rgba(37,99,235,.25)",

                  "&:hover": {
                    backgroundColor: "#1d4ed8",

                    transform: "translateY(-2px)",
                  },

                  transition: "0.3s",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>

          {/* =================================================
              RIGHT INFORMATION CARD
          ================================================= */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 5,
              },

              borderRadius: "22px",

              background: darkMode
                ? "linear-gradient(135deg,#172554,#1e1b4b)"
                : "linear-gradient(135deg,#eff6ff,#eef2ff)",

              border: `1px solid ${
                darkMode ? "#312e81" : "#dbeafe"
              }`,

              position: "relative",

              overflow: "hidden",
            }}
          >
            {/* Decorative Circle */}

            <Box
              sx={{
                position: "absolute",

                width: 220,

                height: 220,

                borderRadius: "50%",

                backgroundColor: "#2563eb",

                opacity: 0.08,

                right: -100,

                top: -80,
              }}
            />

            {/* Content */}

            <Box
              sx={{
                position: "relative",

                zIndex: 1,
              }}
            >
              {/* Icon */}

              <Box
                sx={{
                  width: 65,

                  height: 65,

                  borderRadius: "18px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  backgroundColor: "#2563eb",

                  color: "#ffffff",

                  mb: 3,

                  boxShadow:
                    "0 10px 25px rgba(37,99,235,.3)",
                }}
              >
                <DirectionsCar
                  sx={{
                    fontSize: 32,
                  }}
                />
              </Box>

              {/* Heading */}

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "28px",
                    md: "34px",
                  },

                  fontWeight: 900,

                  color: textColor,

                  lineHeight: 1.2,

                  mb: 2,
                }}
              >
                Need Help With Your{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#2563eb",
                  }}
                >
                  Booking?
                </Box>
              </Typography>

              {/* Description */}

              <Typography
                sx={{
                  color: secondaryText,

                  lineHeight: 1.8,

                  fontSize: "15px",

                  mb: 3,
                }}
              >
                Our customer support team is available
                24/7 to help you find the perfect car,
                answer your questions, and make your
                booking experience simple and stress-free.
              </Typography>

              {/* Support Points */}

              {[
                "24/7 Customer Support",
                "Quick Response Time",
                "Easy Booking Assistance",
                "Professional Service",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1.2,

                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 9,

                      height: 9,

                      borderRadius: "50%",

                      backgroundColor: "#2563eb",
                    }}
                  />

                  <Typography
                    sx={{
                      color: textColor,

                      fontSize: "14px",

                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}

              {/* Divider */}

              <Divider
                sx={{
                  borderColor: borderColor,

                  my: 3,
                }}
              />

              {/* Social Media */}

              <Typography
                sx={{
                  color: textColor,

                  fontWeight: 800,

                  mb: 1.5,
                }}
              >
                Follow Us
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  gap: 1,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: darkMode
                      ? "#1f2937"
                      : "#ffffff",

                    color: "#2563eb",

                    border: `1px solid ${borderColor}`,

                    "&:hover": {
                      backgroundColor: "#2563eb",

                      color: "#ffffff",

                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Facebook />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: darkMode
                      ? "#1f2937"
                      : "#ffffff",

                    color: "#2563eb",

                    border: `1px solid ${borderColor}`,

                    "&:hover": {
                      backgroundColor: "#2563eb",

                      color: "#ffffff",

                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Instagram />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: darkMode
                      ? "#1f2937"
                      : "#ffffff",

                    color: "#2563eb",

                    border: `1px solid ${borderColor}`,

                    "&:hover": {
                      backgroundColor: "#2563eb",

                      color: "#ffffff",

                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Twitter />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: darkMode
                      ? "#1f2937"
                      : "#ffffff",

                    color: "#2563eb",

                    border: `1px solid ${borderColor}`,

                    "&:hover": {
                      backgroundColor: "#2563eb",

                      color: "#ffffff",

                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <WhatsApp />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <Paper
          elevation={0}
          sx={{
            mt: 5,

            p: {
              xs: 3,
              md: 4,
            },

            borderRadius: "20px",

            textAlign: "center",

            backgroundColor: darkMode
              ? "#1f2937"
              : "#ffffff",

            border: `1px solid ${borderColor}`,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                md: "28px",
              },

              fontWeight: 900,

              color: textColor,

              mb: 1,
            }}
          >
            Ready to Start Your Journey?
          </Typography>

          <Typography
            sx={{
              color: secondaryText,

              mb: 2.5,
            }}
          >
            Contact us today and let us help you find
            the perfect car for your next trip.
          </Typography>

          <Button
            variant="contained"
            href="tel:+1234567890"
            startIcon={<Phone />}
            sx={{
              backgroundColor: "#2563eb",

              borderRadius: "10px",

              px: 3,

              py: 1.3,

              textTransform: "none",

              fontWeight: 800,

              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
            }}
          >
            Call Us Now
          </Button>
        </Paper>
      </Container>

      {/* =====================================================
          SUCCESS SNACKBAR
      ===================================================== */}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{
            borderRadius: "10px",
          }}
        >
          Message sent successfully! We will contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;