import styles from "./CardProduct.module.scss";

export default function CardProduct({ title, description, announce, image, dark = false, buttons = [], children }) {
  return (
    <div className={`${styles.card} ${dark ? styles.dark : ""}`}>
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <div className={styles.desc}>{description}</div>}
        {announce && <div className={styles.announce}>{announce}</div>}
        {children}
        <div className={styles.actions}>
          {(buttons || []).map((btn, idx) => (
            <a key={idx} href={btn.href} className={btn.variant === "primary" ? styles.buttonPrimary : styles.buttonOutline}>
              {btn.label}
            </a>
          ))}
        </div>
      </div>
      {image && (
        <div className={styles.productImgWrapper}>
          <img src={image} alt="" className={styles.productImg} />
        </div>
      )}
    </div>
  );
}
