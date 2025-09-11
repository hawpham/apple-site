import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes";
// import './index.css'
import App from "./App";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
