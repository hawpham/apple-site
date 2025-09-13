import styles from "./MainHeader.module.scss";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "Entertainment", "Accessories", "Support"];

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContent}>
          <NavLink to="/">
            <img src="/assets/icons/apple-logo.svg" alt="Apple" className={styles.logo} />
          </NavLink>

          <nav className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              //   <a key={link} href="#" className={styles.navItem}> </a>

              <NavLink to="/" className={styles.navItem}>
                {link}
              </NavLink>
            ))}
          </nav>
          <div className={styles.rightIcons}>
            <button className={styles.iconBtn} aria-label="Search">
              <img src="/assets/icons/search.svg" alt="Search" />
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <img src="/assets/icons/bag.svg" alt="Cart" />
            </button>
            <button className={styles.menuBtn} aria-label="Menu" onClick={() => setMenuOpen(true)}>
              <img src="/assets/icons/menu.svg" alt="Menu" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button className={styles.closeBtn} aria-label="Close" onClick={() => setMenuOpen(false)}>
          <img src="/assets/icons/close.svg" alt="Close Menu" />
        </button>
        <ul className={styles.menuList}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <NavLink to="/">{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default MainHeader;
