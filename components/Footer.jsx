import React from "react";
import styles from "../src/styles/Layout.module.css";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";


const Footer = () => {
  return (
    <footer>
      <div className={styles.social}>
        <div className={styles.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeyefendi/"><ImLinkedin size='2em' /></a>
        </div>
        <div className={styles.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jeyhun77/"><ImFacebook2 size='2em' /></a>
        </div>
        <div className={styles.icon}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi"><ImGithub size='2em'/></a> 
        </div>
      </div>
      <p className={styles.copyright}>
        JEYEfEnDI &copy;&nbsp;2022. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
