import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import styles from "./Layout.module.css";
import Modal from "../Modal/Modal";
import Contact from "../Contact/Contact";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.webp" alt="me" layout="fill"/>
          </a>
        </Link>
      </div>

      <nav>
        <Link href="/about">
          <a className={currentRoute === "/about" ? "active" : "non-active"}>about</a>
        </Link>
        <Link href="/projects">
          <a className={currentRoute === "/projects" ? "active" : "non-active"}>projects</a>
        </Link>
          <button className={styles.contact_button} onClick={() =>setModalActive(true)} >contact</button>
      </nav>

      <div className={styles.home}>
        <div className={styles.house}>
          <Image src="/home.webp" alt="home" layout="fill" />
        </div>
        <address className={styles.location}>MOSCOW</address>
      </div>
    </header>
    <Modal active={modalActive} setActive={setModalActive}>
      <Contact/>
    </Modal>
    </>
  );
};

export default Header;
