import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/about">MyInfo</Link>
          </li>
          <li>
            <Link to="/projects">Things</Link>
          </li>
          <li>
            <Link to="/skills">Vision</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
