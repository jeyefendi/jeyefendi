import React from "react";
import Head from 'next/head'
import HomePage from "../components/Home/Home";

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
      
      <HomePage/>

    </>
  )
}
