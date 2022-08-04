import React, { Component } from "react";
import Head from 'next/head';
import Image from "next/image";
import Slider from "react-slick";
import styles from "../src/styles/Projects.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Head>
          <title>PROJECTS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="keywords" content="JavaScript, React, Next.js, Web Developer, Frontend, Front-End"/>
        </Head>
        <div className={styles.portfolio}>
          <Slider {...settings}>
            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/anime.webp" layout="fill" />
              </div>

              <div className={styles.project_description}>
                <h2>Anime Fan Page</h2>
                <h3>ES6 | jQuery | Bootstrap | SASS</h3>
                <p>Built from template.</p>
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/anime.webp" layout="fill" />
              </div>

              <div className={styles.project_description}>
                <h2>Anime Fan Page</h2>
                <h3>ES6 | jQuery | Bootstrap | SASS</h3>
                <p>Built from template.</p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
