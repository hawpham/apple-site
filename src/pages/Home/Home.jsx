import HeroSection from "../../components/HeroSection/HeroSection";
import IPhoneAirSection from "../../components/ProductsSection/IPhoneAirSection/IPhoneAirSection";
import IPhone17Section from "../../components/ProductsSection/iPhone17Section/iPhone17Section";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <IPhoneAirSection />
      <IPhone17Section />

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Welcome to Apple Clone</h2>
        <p>Explore our latest products and innovations.</p>
      </section>
    </div>
  );
}
