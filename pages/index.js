import React from "react";
import Head from 'next/head'
import Image from "next/image";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>JEYEFENDI</title>
        <meta name="title" content="JEYEFENDI - Web Developer/JavaScript/React/NEXT" />
        <meta name="description" content="Web App powered by React/next.js" />
        <meta name="keywords" content="JavaScript, React, Next.js, Web Developer, Frontend, Front-End"/>
        <meta name="author" content="Jeyhun Farajov"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta content='width' name='MobileOptimized'/>
        <meta content='yes' name='apple-mobile-web-app-capable'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
      <div className={styles.avatar}>
        <Image alt="" src="/avatar.webp" layout="fill"/>
      </div>

      <div className={styles.hero_text}>
        <div className={styles.name}>
          <Image alt="" src="/name.webp" layout="fill"/>
        </div>
        <p className={styles.quote}>
          Just a man in a white coat. Take that off, what are you?
        </p>
        
        <h1 className={styles.quote}>
          Web Developer. Self-Made. JavaScript Coder. Dreamer.
        </h1>
        
      </div>
    </section>
    </>
  )
}
