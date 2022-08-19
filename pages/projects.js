import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../src/styles/Projects.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "-1em",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
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
                <Image alt="" src="/projects/project1.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                  <h2>Anime Fan Page</h2>
                  <span>ES6</span> <span>jQuery</span> <span>Bootstrap</span> <span>SASS</span>
                  <p>Built from template as part of JS Basics Learning.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/anime/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/anime">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project2.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Anime Quote Generator</h2>
                <span>React.js</span> <span>SCSS</span> <span>API</span> <span>Axios</span>
                <p>Powered by React.js with using Axios and Animechan API</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://quote-anime.netlify.app/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/anime-quote">Code</a>
                </div>   
              </div>
            </div>
            
            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project3.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>TourKey - pet-project</h2>
                <span>HTML</span> <span>SCSS</span> <span>JS</span> <span>jQuery</span> <span>BootStrap</span><span>Figma</span>
                <p>Made from Figma scratch with a little of creativity</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/tourkey/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/tourkey">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project4.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Insurance - pet-project</h2>
                <span>React.js</span> <span>Tailwind</span> <span>SCSS</span><span>Adobe Ps</span>
                <p>Made from PSD scratch as part of JSX Components Basics</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/insurance/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/insurance">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project5.webp" layout="fill" />
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

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project6.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                  <h2>WShosting - Test Task</h2>
                  <span>HTML</span> <span>CSS</span>
                  <p>Landing Page from Figma scratch</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/wshosting/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/wshosting">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project7.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                  <h2>jeyefendi.com v1.0</h2>
                  <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                  <p>The initial view of this site.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/jeyefendi_1.0/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/jeyefendi_1.0">Code</a>
                </div>   
              </div>
            </div>

          </Slider>
        </div>
      </>
    );
  }
}
