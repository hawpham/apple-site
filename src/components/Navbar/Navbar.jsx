import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          
        </Link>
        <nav>
          <Link to="/store">Store</Link>
          <Link to="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
}
