import styles from "./About.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.skills}>
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
            <span>Redux</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <span>TailWind</span>
            <span>Bootstrap</span>
            <span>jQuery</span>
            <span>Node.js</span>
            <span>Wordpress</span>
            <span>Axios</span>
            <span>Webpack</span>
          </div>

          <p>
            Yeah, I&nbsp;am a&nbsp;Doctor by&nbsp;education. And I&rsquo;m
            incredibly proud of&nbsp;It. But the heart has a&nbsp;will
            of&nbsp;its own. It&nbsp;led me&nbsp;into Development.<br></br>Now
            I&nbsp;am going step by&nbsp;step towards my&nbsp;goal&nbsp;&mdash;
            to&nbsp;become an&nbsp;outstanding developer and create my&nbsp;own
            product.<br></br>I&nbsp;have a&nbsp;sea of&nbsp;skills and an&nbsp;ocean
            of&nbsp;ambitions.<br></br>Ah&nbsp;sh*t!
            Here we&nbsp;go!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
