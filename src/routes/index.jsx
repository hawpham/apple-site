import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductIntro from "../components/ProductIntro/ProductIntro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news/:id",
    element: <ProductIntro />,
  },
]);
