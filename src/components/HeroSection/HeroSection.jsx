import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textBox}>
        <h1 className={styles.headline}>Event</h1>
        <p className={styles.subtitle}>Live Stream</p>
        <p className={styles.announce}>Available starting 9.19</p>
        <div className={styles.actions}>
          <a href="#" className={styles.buttonPrimary}>
            Learn more
          </a>
          <a href="#" className={styles.buttonOutline}>
            Pre-order
          </a>
        </div>
      </div>
      <img className={styles.heroImage} src="/assets/products/hero_iphone_17_pro_preorder.jpg" alt="iPhone 17 Pro" />
    </section>
  );
}

export default HeroSection;
