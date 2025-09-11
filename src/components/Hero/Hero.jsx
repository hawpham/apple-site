import styles from "./Hero.module.scss";
import heroImage from "../../assets/hero_startframe_event.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>iPhone 16 Pro</h1>
        <p>Titanium. So strong. So light. So Pro.</p>
        <div className={styles.actions}>
          <a href="/store">Learn more</a>
          <a href="/store" className={styles.buy}>
            Buy
          </a>
        </div>
      </div>
      <img src={heroImage} alt="iPhone" className={styles.image} />
    </section>
  );
}
