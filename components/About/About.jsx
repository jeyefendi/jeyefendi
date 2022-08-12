import styles from "./About.module.css";
import Skills from "./Skills";
import Resume from "./Resume";

const AboutPage = () => {    
  return (
    <section className={styles.about}>
      <Skills/>
      <Resume/>
    </section>
  );
};

export default AboutPage;
