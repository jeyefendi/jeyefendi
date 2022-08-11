import Image from "next/image";
import styles from "./About.module.css";
import Resume from "./Resume";

const AboutPage = () => {    
  return (
    <section className={styles.about}>
        <Resume/>
    </section>
  );
};

export default AboutPage;
