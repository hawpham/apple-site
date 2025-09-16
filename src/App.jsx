import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import styles from "./styles/App.module.scss";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
