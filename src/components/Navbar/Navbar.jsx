import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <header className={styles.navbarContainer}>
    <nav>
      <ul className={styles.navLinksList}>
        <li>
          <Link to="/home" className={styles.homeLink}>
            HOME
          </Link>
        </li>
      </ul>
    </nav>
    <nav>
      <ul className={styles.navLinksList}>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/about-me">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
