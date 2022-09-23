import { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../styles/Projects.module.css";

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
                <Image alt="" src="/projects/project01.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Anime Quote Generator</h2>
                <span>React.js</span> <span>API</span> <span>Axios</span> <span>SCSS</span>
                <p>Powered by React.js with using Axios and Animechan API.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://quote-anime.netlify.app/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/anime-quote">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project02.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Notes macOS Clone</h2>
                <span>TypeScript</span> <span>React.js</span> <span>mobX</span> <span>JSX</span>
                <p>SPA with delete, edit, search functions.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://iosnotes.netlify.app/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/notes_ios">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project03.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Spotify Playlist</h2>
                <span>React.js</span> <span>RestAPI</span> <span>JSX</span>
                <p>Web App for create and edit playlists from Spotify.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://spotifyplaylist.netlify.app/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/spotify">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project04.webp" layout="fill" />
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
                <Image alt="" src="/projects/project05.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>TourKey - pet-project</h2>
                <span>HTML</span> <span>SCSS</span> <span>JS</span> <span>jQuery</span> <span>BootStrap</span> <span>Figma</span>
                <p>Made from Figma scratch with a little of creativity.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/tourkey/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/tourkey">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project06.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>Insurance - pet-project</h2>
                <span>React.js</span> <span>Tailwind</span> <span>SCSS</span> <span>Adobe Ps</span>
                <p>Made from PSD scratch as part of JSX Components Basics.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://jeyefendi.github.io/insurance/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/insurance">Code</a>
                </div>   
              </div>
            </div>

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project07.webp" layout="fill" />
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
                <Image alt="" src="/projects/project08.webp" layout="fill" />
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

            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="" src="/projects/project09.webp" layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                <h2>DARYKANA</h2>
                <span>Next.js</span> <span>React.js</span>
                <p>This is my own failed startup. Open GitHub to read more.</p>
                </div>
                <div className={styles.project_links}>
                  <a className={styles.live} target="_blank" rel="noopener noreferrer" href="https://darykana.vercel.app/">Live</a>
                  <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi/darykana">Code</a>
                </div>   
              </div>
            </div>

          </Slider>
        </div>
      </>
    );
  }
}
