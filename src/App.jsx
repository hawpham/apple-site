import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import MainHeader from "./components/Header/MainHeader.jsx";

export default function App() {
  return (
    <>
      <MainHeader />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
