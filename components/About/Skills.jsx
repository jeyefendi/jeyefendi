import styles from "./About.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>SUMMARY</h1>

      <div className={styles.skills_card}>
        <div className={styles.skills_photo}>
          <Image alt="" src="/photo.png" layout="fill" />
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
          </div>
          <p>
            Now I'm fully focused on Web Development. Frontend Developer who
            likes to create responsive web applications, always focusing on an
            exceptional user experience. I like to work individually as well as
            in teams and greatly appreciate being able to bring my ideas to the
            table when it comes to building a fluid frontend powered by React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
