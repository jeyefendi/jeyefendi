import React from "react";
import Head from 'next/head'
import Image from "next/image";
import styles from "../src/styles/Home.module.css";
import avatar from "../src/img/avatar.webp";
import name from "../src/img/name.webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JEYEFENDI</title>
        <meta name="description" content="Powered by Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
      <div className={styles.avatar}>
        <Image alt="" src={avatar} layout="fill"/>
      </div>

      <div className={styles.hero_text}>
        <div className={styles.name}>
          <Image alt="" src={name} />
        </div>
        <p className={styles.quote}>
          Just a man in a white coat. Take that off, what are you?
        </p>
        <h1 className={styles.quote}>
          Web Developer, Freelancer, JavaScript Coder, Dreamer.
        </h1>
      </div>
    </section>
    </div>
  )
}
