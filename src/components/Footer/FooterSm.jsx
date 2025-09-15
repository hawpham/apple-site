import { useState } from "react";
import styles from "./Footer.module.scss";

export default function FooterSm({ links }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <footer className={styles.footerSm}>
      {links.map((group, idx) => (
        <div key={idx} className={styles.groupWrap}>
          <button className={styles.groupBtn} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            {group.group}
            <span className={styles.arrow}>{openIdx === idx ? "▲" : "▼"}</span>
          </button>
          <ul className={styles.collapse} style={{ display: openIdx === idx ? "block" : "none" }}>
            {group.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.footerInfo}></div>
    </footer>
  );
}
