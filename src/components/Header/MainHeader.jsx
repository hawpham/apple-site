import styles from "./MainHeader.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "Entertainment", "Accessories", "Support"];

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContent}>
          <NavLink to="/" className={styles.headerLogo}>
            {/* <img src="/assets/icons/apple-logo.svg" alt="Apple" className={styles.logo} /> */}
            <svg className={styles.logo} height="44" viewBox="0 0 14 44" width="44" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
              ></path>
            </svg>
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
              {/* <img src="/assets/icons/search.svg" alt="Search" /> */}
              <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.5 3a7.5 7.5 0 015.97 12.15l4.69 4.69-1.42 1.42-4.69-4.69A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" fill="currentColor" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              {/* <img src="/assets/icons/bag.svg" alt="Cart" /> */}
              <svg className={styles.cartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18 6h-2V5a4 4 0 10-8 0v1H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2zm-8-1a2 2 0 114 0v1h-4V5zm8 15H6V8h12v12z" fill="currentColor" />
              </svg>
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
