import React from "react";
import styles from "./Layout.module.css";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";


const Footer = () => {
  return (
    <footer>
      <div className={styles.social_icons}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeyefendi/"><ImLinkedin /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jeyhun77/"><ImFacebook2 /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeyefendi"><ImGithub/></a> 
      </div>
      <p className={styles.copyright}>
        JEYEFENDI &copy;&nbsp;2022. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
