import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { useQuery } from "react-query";
import { getProjects } from "../services/api";
import Loader from "../components/Loader/Loader";
import SimpleSlider from "../components/Slider/Slider";

export default function Projects() {
  const { isLoading, isRefetching, data, isError, error } = useQuery(
    "Projects",
    getProjects,
  );

  if (isLoading || isRefetching) {
    return <Loader/>;
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
        <SimpleSlider>
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
        </SimpleSlider>
      </div>
    </>
  );
}