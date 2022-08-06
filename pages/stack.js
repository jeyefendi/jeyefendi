import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../src/styles/Skills.module.css";
import Wheel from "../components/wheel";

export default function Skills() {
  return (
    <>
      <Head>
        <title>STACK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="JavaScript, React, Next.js, Web Developer, Frontend, Front-End" />
      </Head>

      <section className={styles.skills}>
        <div className={styles.skills_menu}>
          <div className={styles.toggle} id="toggle">
            <Image alt="Knuckle" src="/skills/knuckle.webp" layout="fill" onclick="menu-expand()"/>
          </div>

          <div className={styles.menu} id="menu">
            <a href="#"><div className={styles.skills_item}><Image alt="Item_1" src="/skills/item_1.webp" layout="fill" /></div></a>
            <a href="#"><div className={styles.skills_item}><Image alt="Item_2" src="/skills/item_2.webp" layout="fill" /></div></a>
            <a href="#"><div className={styles.skills_item}><Image alt="Item_3" src="/skills/item_3.webp" layout="fill" /></div></a>
            <a href="#"><div className={styles.skills_item}><Image alt="Item_4" src="/skills/item_4.webp" layout="fill" /></div></a>
          </div>
        </div>
        <>
          <Script src={Wheel} />
        </>
      </section>
    </>
  );
}
