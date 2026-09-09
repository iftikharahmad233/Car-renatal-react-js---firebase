import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";

import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  DirectionsCar,
  ArrowForward,
  Login as LoginIcon,
} from "@mui/icons-material";

import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../libs/firebase";

const Register = ({ darkMode }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [registerSuccess, setRegisterSuccess] =
    useState(false);

  const [firebaseError, setFirebaseError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // ==========================================
  // THEME
  // ==========================================

  const textColor = darkMode
    ? "#ffffff"
    : "#111827";

  const secondaryText = darkMode
    ? "#9ca3af"
    : "#6b7280";

  const cardBg = darkMode
    ? "#1f2937"
    : "#ffffff";

  const borderColor = darkMode
    ? "#374151"
    : "#e5e7eb";

  // ==========================================
  // REACT HOOK FORM
  // ==========================================

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // ==========================================
  // REGISTER WITH FIREBASE
  // ==========================================

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setFirebaseError("");

      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      setRegisterSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.log(error);

      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        setFirebaseError(
          "This email is already registered."
        );
      } else if (
        error.code ===
        "auth/weak-password"
      ) {
        setFirebaseError(
          "Password must be at least 6 characters."
        );
      } else {
        setFirebaseError(
          "Something went wrong. Please try again."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // TEXT FIELD STYLE
  // ==========================================

  const textFieldStyle = {
    mb: 2,

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
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 75px)",

        background: darkMode
          ? "linear-gradient(135deg,#0f172a,#111827)"
          : "linear-gradient(135deg,#f8fafc,#eff6ff)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        py: {
          xs: 5,
          md: 8,
        },
      }}
    >
      <Container maxWidth="sm">

        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 3,
              sm: 5,
            },

            borderRadius: "24px",

            backgroundColor: cardBg,

            border: `1px solid ${borderColor}`,

            boxShadow: darkMode
              ? "0 20px 50px rgba(0,0,0,.35)"
              : "0 20px 50px rgba(37,99,235,.10)",
          }}
        >

          {/* LOGO */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
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
              }}
            >
              <DirectionsCar
                sx={{
                  fontSize: 34,
                }}
              />
            </Box>
          </Box>

          {/* HEADING */}

          <Box
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "36px",
                },

                fontWeight: 900,

                color: textColor,

                mb: 1,
              }}
            >
              Create{" "}

              <Box
                component="span"
                sx={{
                  color: "#2563eb",
                }}
              >
                Account
              </Box>
            </Typography>

            <Typography
              sx={{
                color: secondaryText,
                fontSize: "15px",
              }}
            >
              Join us and start your journey today.
            </Typography>
          </Box>

          {/* SUCCESS MESSAGE */}

          {registerSuccess && (
            <Alert
              severity="success"
              sx={{
                mb: 2,
                borderRadius: "10px",
              }}
            >
              Account created successfully!
              Redirecting to login...
            </Alert>
          )}

          {/* ERROR MESSAGE */}

          {firebaseError && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                borderRadius: "10px",
              }}
            >
              {firebaseError}
            </Alert>
          )}

          {/* FORM */}

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >

            {/* NAME */}

            <TextField
              fullWidth
              label="Full Name"
              placeholder="Enter your full name"
              sx={textFieldStyle}
              error={!!errors.name}
              helperText={errors.name?.message}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person
                      sx={{
                        color: secondaryText,
                      }}
                    />
                  </InputAdornment>
                ),
              }}

              {...register("name", {
                required: "Name is required",

                minLength: {
                  value: 3,

                  message:
                    "Name must be at least 3 characters",
                },
              })}
            />

            {/* EMAIL */}

            <TextField
              fullWidth
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              sx={textFieldStyle}
              error={!!errors.email}
              helperText={errors.email?.message}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email
                      sx={{
                        color: secondaryText,
                      }}
                    />
                  </InputAdornment>
                ),
              }}

              {...register("email", {
                required: "Email is required",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message:
                    "Please enter a valid email",
                },
              })}
            />

            {/* PASSWORD */}

            <TextField
              fullWidth
              label="Password"
              placeholder="Create a password"

              type={
                showPassword
                  ? "text"
                  : "password"
              }

              sx={textFieldStyle}

              error={!!errors.password}

              helperText={
                errors.password?.message
              }

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock
                      sx={{
                        color: secondaryText,
                      }}
                    />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">

                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff
                          sx={{
                            color: secondaryText,
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            color: secondaryText,
                          }}
                        />
                      )}
                    </IconButton>

                  </InputAdornment>
                ),
              }}

              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,

                  message:
                    "Password must be at least 6 characters",
                },
              })}
            />

            {/* CONFIRM PASSWORD */}

            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"

              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }

              sx={textFieldStyle}

              error={
                !!errors.confirmPassword
              }

              helperText={
                errors.confirmPassword?.message
              }

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock
                      sx={{
                        color: secondaryText,
                      }}
                    />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">

                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? (
                        <VisibilityOff
                          sx={{
                            color: secondaryText,
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            color: secondaryText,
                          }}
                        />
                      )}
                    </IconButton>

                  </InputAdornment>
                ),
              }}

              {...register(
                "confirmPassword",
                {
                  required:
                    "Please confirm your password",

                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
                }
              )}
            />

            {/* REGISTER BUTTON */}

            <Button
              type="submit"
              fullWidth
              variant="contained"

              disabled={loading}

              endIcon={
                loading
                  ? <CircularProgress
                      size={20}
                      color="inherit"
                    />
                  : <ArrowForward />
              }

              sx={{
                mt: 1,

                py: 1.5,

                borderRadius: "12px",

                textTransform: "none",

                fontSize: "16px",

                fontWeight: 800,

                backgroundColor: "#2563eb",

                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </Button>

          </Box>

          {/* DIVIDER */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              my: 3,
            }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor: borderColor,
              }}
            />

            <Typography
              sx={{
                color: secondaryText,
                fontSize: "13px",
              }}
            >
              OR
            </Typography>

            <Divider
              sx={{
                flex: 1,
                borderColor: borderColor,
              }}
            />
          </Box>

          {/* LOGIN LINK */}

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                color: secondaryText,
                fontSize: "14px",
              }}
            >
              Already have an account?
            </Typography>

            <Button
              component={Link}
              to="/login"
              startIcon={<LoginIcon />}

              sx={{
                textTransform: "none",

                color: "#2563eb",

                fontWeight: 800,
              }}
            >
              Login
            </Button>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
};

export default Register;