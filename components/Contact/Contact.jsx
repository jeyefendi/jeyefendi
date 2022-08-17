import React from 'react'
import styles from "./Contact.module.css";
import {FaTelegram} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";
import {AiTwotoneMail} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import {SiFreelancer} from "react-icons/si";




const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>GET IN TOUCH</h1>
      <div className={styles.contact_icons}>
        <a target="_blank" rel="noopener noreferrer" href="https://tlgg.ru/jeyefendi"><FaTelegram/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/79220776977"><BsWhatsapp/></a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:jeyhunfarajov@gmail.com"><AiTwotoneMail /></a>
      </div>
      <h1>PLACE THE ORDER</h1>
      <div className={styles.contact_icons}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~0184b4a4752e7a67c4"><SiUpwork/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.freelancer.com.ru/u/jeyefendi"><SiFreelancer/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.fl.ru/users/jeyhunfarajov/portfolio/"><span className={styles.fl}>F L</span></a>
      </div>
    </div>
  )
}

export default Contact