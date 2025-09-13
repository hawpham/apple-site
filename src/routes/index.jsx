import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import App from "../App.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      //   { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
