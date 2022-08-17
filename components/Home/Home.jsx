import Image from "next/image";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.avatar}>
      <Image alt="" src="/avatar.png" layout="fill"/>
    </div>

    <div className={styles.hero_text}>
      <div className={styles.name}>
        <Image alt="" src="/name.webp" layout="fill"/>
      </div>
      <p className={styles.question}>
        Just a man in a white coat. Take that off, what are you?
      </p>
      
      <h1 className={styles.answer}>
        <span>Web Dev. Self-Made.</span> Front-End Coder. Dreamer.
      </h1>
      
    </div>
  </section>
  )
}

export default HomePage