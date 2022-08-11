import React from 'react'
import styles from "./Contact.module.css";
import {FaTelegram} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <a target="_blank" rel="noopener noreferrer" href="https://tlgg.ru/jeyefendi"><FaTelegram size="2em" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://wa.me/79220776977"><BsWhatsapp size="2em" /></a>
    </section>
  )
}

export default Contact