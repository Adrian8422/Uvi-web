import { HomePage } from "../pages/home";
import { Route, Routes } from "react-router-dom";
import React from "react";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
    </Routes>
  );
}

export { AppRouter };
