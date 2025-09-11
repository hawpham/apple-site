import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import Support from "../pages/Support/Support";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}
