import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <header className={styles.navbarContainer}>
    <nav>
      <ul className={styles.navLinksList}>
        <li>
          <a href="/home" className={styles.homeLink}>
            HOME
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul className={styles.navLinksList}>
        <li>
          <a href="/portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="/about-me">ABOUT ME</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
