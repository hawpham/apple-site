import styles from "./ProductGridLayout.module.scss";

export default function ProductGridLayout({ children }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>{children}</div>
    </section>
  );
}
