import Head from 'next/head'
import AboutPage from '../components/About/About';

export default function About() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="JavaScript, React, Next.js, Web Developer, Frontend, Front-End"/>
      </Head>
      <AboutPage/>
    </>
  );
}