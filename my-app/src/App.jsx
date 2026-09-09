import React, { useState } from "react";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  // Check if current page is Login or Register
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {/* ============================= */}
      {/* NAVBAR */}
      {/* Hide Navbar on Login/Register */}
      {/* ============================= */}

      {!isAuthPage && (
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}

      {/* ============================= */}
      {/* ROUTES */}
      {/* ============================= */}

      <Routes>

        {/* ============================= */}
        {/* FIRST PAGE */}
        {/* Website opens Login page */}
        {/* ============================= */}

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* ============================= */}
        {/* LOGIN */}
        {/* ============================= */}

        <Route
          path="/login"
          element={
            <Login darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* REGISTER */}
        {/* ============================= */}

        <Route
          path="/register"
          element={
            <Register darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* HOME */}
        {/* ============================= */}

        <Route
          path="/home"
          element={
            <Home darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* CARS */}
        {/* ============================= */}

        <Route
          path="/cars"
          element={
            <Cars darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* CAR DETAIL */}
        {/* ============================= */}

        <Route
          path="/cars/:id"
          element={
            <Detail darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* ABOUT */}
        {/* ============================= */}

        <Route
          path="/about"
          element={
            <About darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* CONTACT */}
        {/* ============================= */}

        <Route
          path="/contact"
          element={
            <Contact darkMode={darkMode} />
          }
        />

        {/* ============================= */}
        {/* IF WRONG URL */}
        {/* ============================= */}

        <Route
          path="*"
          element={
            <Navigate to="/login" replace />
          }
        />

      </Routes>

      {/* ============================= */}
      {/* FOOTER */}
      {/* Hide Footer on Login/Register */}
      {/* ============================= */}

      {!isAuthPage && (
        <Footer darkMode={darkMode} />
      )}

    </>
  );
};

export default App;