import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const footerLinks = [
  {
    group: "Shop and Learn",
    items: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    group: "Apple Wallet",
    items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    group: "Account",
    items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    group: "Entertainment",
    items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
  },
  {
    group: "Apple Store",
    items: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"],
  },
  // {
  //   group: "For Business",
  //   items: ["Apple and Business", "Shop for Business"],
  // },
  // {
  //   group: "For Education",
  //   items: ["Apple and Education", "Shop for K-12", "Shop for College"],
  // },
  // {
  //   group: "For Healthcare",
  //   items: ["Apple and Healthcare"],
  // },
  // {
  //   group: "For Government",
  //   items: ["Apple and Government", "Shop for Veterans and Military", "Shop for State and Local Employees", "Shop for Federal Employees"],
  // },
  // {
  //   group: "Apple Values",
  //   items: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain Innovation"],
  // },
  // {
  //   group: "About Apple",
  //   items: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  // },
];

export default function Footer() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <footer className={styles.footer}>
      {/* Default*/}
      <div className={styles.footerDesktop}>
        <div className={styles.grid}>
          {footerLinks.map((group, idx) => (
            <div key={idx} className={styles.col}>
              <h3 className={styles.group}>{group.group}</h3>
              <ul>
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <NavLink to="/">{item}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <FooterInfo />
      </div>
      {/*   Accordion */}
      <div className={styles.footerMobile}>
        {footerLinks.map((group, idx) => (
          <div key={idx} className={styles.groupWrap}>
            <button className={styles.groupBtn} onClick={() => setOpenIdx(openIdx === idx ? null : idx)} aria-expanded={openIdx === idx}>
              {group.group}
              <span className={styles.arrow}>{openIdx === idx ? "▲" : "▼"}</span>
            </button>
            <ul className={styles.collapse} style={{ display: openIdx === idx ? "block" : "none" }}>
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <NavLink to="/">{item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <FooterInfo />
      </div>
    </footer>
  );
}

function FooterInfo() {
  return (
    <div className={styles.footerInfo}>
      <p>
        More ways to shop:
        <NavLink to="/" className={styles.footerLink}>
          Find an Apple Store
        </NavLink>
        or
        <NavLink to="/" className={styles.footerLink}>
          other retailer
        </NavLink>
        near you. Or call
        <NavLink to="/" className={styles.footerLink}>
          1-800-MY-APPLE
        </NavLink>
      </p>
      <hr />
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>Copyright © 2025 Apple Inc. All rights reserved.</div>
        <ul className={styles.legal}>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms of Use</NavLink>
          </li>
          <li>
            <NavLink to="/">Sales and Refunds</NavLink>
          </li>
          <li>
            <NavLink to="/">Legal</NavLink>
          </li>
          <li>
            <NavLink to="/">Site Map</NavLink>
          </li>
        </ul>
        <ul className={styles.footerLang}>
          <li>
            <NavLink to="/">United States</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
