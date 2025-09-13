import Hero from "../../components/Hero/Hero";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Hero /> */}
      <HeroSection />
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Welcome to Apple Clone</h2>
        <p>Explore our latest products and innovations.</p>
      </section>
    </div>
  );
}
