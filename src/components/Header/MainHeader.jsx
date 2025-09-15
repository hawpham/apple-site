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
            <svg className={styles.logo} viewBox="0 0 20 45" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
                fill="currentColor"
              />
            </svg>
          </NavLink>

          <nav className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              //   <a key={link} href="#" className={styles.navItem}> </a>
              <NavLink key={link} to="/" className={styles.navItem}>
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
              {/* <img src="/assets/icons/menu.svg" alt="Menu" /> */}
              <svg className={styles.menuIcon} width="18" height="18" viewBox="0 0 18 18">
                <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom">
                  <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                  <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
                </polyline>
                <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top">
                  <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                  <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
                </polyline>
              </svg>
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
