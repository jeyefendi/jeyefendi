import Image from "next/image";
import Script from 'next/script'
import styles from '../src/styles/Skills.module.css';
import knuckle from '../src/img/skills/skills-menu.webp';
import item_1 from '../src/img/skills/skills_item1.webp';
import item_2 from '../src/img/skills/skills_item2.webp';
import item_3 from '../src/img/skills/skills_item3.webp';
import item_4 from '../src/img/skills/skills_item4.webp';
import Wheel from '../components/wheel'

export default function Skills() {
  return (
    <section className={styles.skills}>
    <div className={styles.skills_menu}>
      <div className={styles.toggle} id="toggle" >
      <Image src={knuckle} alt="Skills menu" id="knuckle" width="150" height="150" onclick="menu-expand()"/>
      </div>

      <div className={styles.menu} id="menu">
        <a href="#"><Image src={item_1} alt="" /></a>
        <a href="#"><Image src={item_2} alt="" /></a>
        <a href="#"><Image src={item_3} alt="" /></a>
        <a href="#"><Image src={item_4} alt="" /></a>
      </div>
    </div>
    <>
      <Script src={Wheel} />
    </>
  </section>
  
  )
}