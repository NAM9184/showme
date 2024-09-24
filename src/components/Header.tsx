import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* <li>
            <Link href="/">home</Link>
          </li> */}
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/projects">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
