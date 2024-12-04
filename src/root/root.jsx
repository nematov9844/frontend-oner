import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Korzinka from "../pages/korzinka";
import Login from "../components/login";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Korzinka />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}
