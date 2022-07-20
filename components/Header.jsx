import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../src/styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.webp" alt="me" width="64" height="101" />
          </a>
        </Link>
      </div>

      <nav>
        <Link href="/about">
          <a className={styles.nav_links}>About</a>
        </Link>
        <Link href="/skills">
          <a className={styles.nav_links}>Skills</a>
        </Link>
        <Link href="/projects">
          <a className={styles.nav_links}>Projects</a>
        </Link>
      </nav>

      <div className={styles.home}>
        <div className={styles.house}>
          <Image src="/home.webp" alt="home" layout="fill" />
        </div>
        <address className={styles.location}>MOSCOW</address>
      </div>
    </header>
  );
};

export default Header;
