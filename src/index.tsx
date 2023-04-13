import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import { AppRouter } from "./router";
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
