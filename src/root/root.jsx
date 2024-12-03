import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Korzinka from "../pages/korzinka";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Korzinka />} />
      </Routes>
    </Router>
  );
}
