import styles from "./iPhone17Section.module.scss";

function iPhone17Section() {
  return (
    <section className={styles.bgSection}>
      <div className={styles.info}>
        <h2 className={styles.title}>iPhone 17</h2>
        <p className={styles.desc}>Magichromatic</p>
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

export default iPhone17Section;
