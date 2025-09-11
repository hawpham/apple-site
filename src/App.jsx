import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import AppRoutes from "./routes/router";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <h1>AppLe.com</h1>
      <main>{/* <AppRoutes /> */}</main>
      <Footer />
    </div>
  );
}

export default App;
