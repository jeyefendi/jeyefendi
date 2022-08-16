import styles from "./About.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>SUMMARY</h1>

      <div className={styles.skills_card}>
        <div className={styles.skills_photo}>
          <Image alt="" src="/avatar.webp" layout="fill" />
        </div>

        <div className={styles.skills_text}>
          <div className={styles.skills_stack}>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Typescript</span>
            <span>Axios</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Node.js</span>
            <span>Wordpress</span>
            <span>Gatsby</span>
            <span>MongoDB</span>
            <span>GraphQL</span>
            <span>MERN</span>
          </div>
          <p>Now I&nbsp;am fully focused on&nbsp;Web Development. Frontend Developer who likes to&nbsp;create responsive web applications, always focusing on&nbsp;an&nbsp;exceptional user experience. I&nbsp;like to&nbsp;work individually as&nbsp;well as&nbsp;in&nbsp;teams and greatly appreciate being able to&nbsp;bring my&nbsp;ideas to&nbsp;the table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
