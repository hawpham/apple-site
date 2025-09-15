import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import MainHeader from "./components/Header/MainHeader.jsx";
import styles from "./styles/App.module.scss";

export default function App() {
  return (
    <>
      <MainHeader />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
