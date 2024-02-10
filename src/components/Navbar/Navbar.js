import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.navLink}>
            Financial website
          </Link>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Exchange
          </Link>
        </li>
        <li>
          <Link to="/instruments" className={styles.navLink}>
            Instrument
          </Link>
        </li>
        <li>
          <Link to="/candles" className={styles.navLink}>
            Candle
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
