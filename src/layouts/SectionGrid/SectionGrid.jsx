import styles from "./SectionGrid.module.scss";

export default function SectionGrid({ children }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>{children}</div>
    </section>
  );
}
