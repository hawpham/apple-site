import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Apple.com</h1>
      <Hero />
    </div>
  );
}
