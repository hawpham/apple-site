import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textBox}>
        <h1 className={styles.headline}>Apple Event</h1>
        <p className={styles.subtitle}>Watch today at 10 a.m PT</p>
        <div className={styles.actions}>
          <a href="#" className={styles.buttonPrimary}>
            Add to calendar
          </a>
        </div>
      </div>
      <img className={styles.heroImage} src="/assets/events/apple_events_bg_vel.png" alt="Apple event" />
    </section>
  );
}

export default HeroSection;
