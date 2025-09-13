import styles from "./IPhoneAirSection.module.scss";

function iPhoneAirSection() {
  return (
    <section className={styles.bgSection}>
      <div className={styles.info}>
        <h2 className={styles.title}>iPhone Air</h2>
        <p className={styles.desc}>
          The thinnest iPhone ever.
          <br />
          With the power of pro inside.
        </p>
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
    </section>
  );
}

export default iPhoneAirSection;
