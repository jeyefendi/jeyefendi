import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../styles/Projects.module.css";
import { useQuery } from "react-query";
import { getProjects } from "../services/api";

const SimpleSlider = () => {
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
        breakpoint: 850,
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

  const { isLoading, isRefetching, data, isError, error } = useQuery(
    "Projects",
    getProjects,
  );

  if (isLoading || isRefetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Head>
        <title>PROJECTS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="JavaScript, React, Next.js, Web Developer, Frontend, Front-End"
        />
      </Head>
      <div className={styles.portfolio}>
        <Slider {...settings}>
          {data.map((data) => (
            <div className={styles.project}>
              <div className={styles.project_preview}>
                <Image alt="Thumbnail" src={data.img} layout="fill" />
              </div>
              <div className={styles.project_description}>
                <div className={styles.project_title}>
                  <h2>{data.title}</h2>
                  {data.tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                  <p>{data.description}</p>
                </div>
                <div className={styles.project_links}>
                  <a
                    className={styles.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.live}
                  >
                    Live
                  </a>
                  <a
                    className={styles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.code}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default SimpleSlider;