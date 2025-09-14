import styles from "./SectionFullWidth.module.scss";

export default function SectionFullWidth({ children }) {
  return <section className={styles.fullSection}>{children}</section>;
}
