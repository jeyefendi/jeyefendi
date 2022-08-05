import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../src/styles/Projects.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
                <div className={styles.project_title}>
                  <h2>Anime Fan Page</h2>
                  <span>ES6</span> <span>jQuery</span> <span>Bootstrap</span> <span>SASS</span>
                  <p>Built from template.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/anime/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/anime">Code</a>
                </div>   
              </div>
            </div>
            
            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/tourkey.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>TourKey - pet-project</h2>
                <span>HTML</span> <span>SCSS</span> <span>JS</span> <span>jQuery</span> <span>BootStrap</span>
                <p>Made from .psd scratch with a little of my creativity</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/tourkey/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/tourkey">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/insurance.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Insurance - pet-project</h2>
                <span>React.js</span> <span>Tailwind</span> <span>SCSS</span>
                <p>Made from scratch with using components.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/insurance/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/insurance">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/onpoint.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                  <h2>Onpoint© - Test Task</h2>
                  <span>HTML</span> <span>CSS</span>
                  <p>Web App for tablets (1024x768): swipeable slides.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/onpoint/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/onpoint">Code</a>
                </div>   
              </div>
            </div>

          </Slider>
        </div>
      </>
    );
  }
}
