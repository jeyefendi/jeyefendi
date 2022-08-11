import styles from "./About.module.css";
import Image from "next/image";

const Resume = () => {
  return (
    <div className={styles.resume}>
        <div className={styles.resume_text}>
          <h2>Looking for my CV?</h2>
          <p>Choose your language:</p>
        </div>

        <div className={styles.resume_icons}>
          <a  target="_blank" rel="noopener noreferrer" className={styles.language} href='https://drive.google.com/file/d/1ICP8EB2NTUNTEMp0fTxaine4arFL5FyB/view?usp=sharing'><Image src="/about/english.webp" alt="English" layout="fill"/></a>
          <a  target="_blank" rel="noopener noreferrer" className={styles.language} href='https://drive.google.com/file/d/1sBcDhj8gwnJ0Jp97RO-CNdl6YMVB_GO_/view?usp=sharing'><Image src="/about/russian.webp" alt="Russian" layout="fill"/></a>
        </div>        
    </div>
  )
}

export default Resume