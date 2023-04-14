import { HomePage } from "../pages/home";
import { Route, Routes } from "react-router-dom";
import React from "react";

import { ServicesPage } from "pages/services";
import { AboutOur } from "pages/about-our";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-our" element={<AboutOur />} />
    </Routes>
  );
}

export { AppRouter };
