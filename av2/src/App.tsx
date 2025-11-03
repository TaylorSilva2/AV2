import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation,  Navigate } from "react-router-dom";
import Home from "./assets/pages/Home";
import Dashboard from "./assets/pages/Dashboard";
import Login from "./assets/pages/Login";
import "./app.css";

const Navbar = () => {
  const location = useLocation();

  // Oculta a navbar na tela de login
  if (location.pathname === "/login") return null;

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>AeroCode</h2>
      <div>
        <Link
          to="/home"
          style={{ color: "#fff", textDecoration: "none", marginRight: "15px" }}
        >
          Início
        </Link>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
          Painel
        </Link>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
