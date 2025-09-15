import styles from "./Footer.module.scss";

export default function FooterLg({ links }) {
  return (
    <footer className={styles.footerLg}>
      <div className={styles.grid}>
        {links.map((group, idx) => (
          <div key={idx} className={styles.col}>
            <h3 className={styles.group}>{group.group}</h3>
            <ul>
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerInfo}>
        <div>
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call <a href="tel:18006927753">1-800-MY-APPLE</a>.
        </div>
        <div className={styles.copyright}>Copyright © 2025 Apple Inc. All rights reserved.</div>
        <ul className={styles.legal}>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
