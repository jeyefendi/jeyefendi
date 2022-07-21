import Image from "next/image";
import Script from 'next/script'
import styles from '../src/styles/Skills.module.css';
import Wheel from '../components/wheel'

export default function Skills() {
  return (
    <section className={styles.skills}>
    <div className={styles.skills_menu}>
      <div className={styles.toggle} id="toggle" >
      <Image alt="Knuckle" src="/skills/knuckle.webp" layout="fill" onclick="menu-expand()"/>
      </div>

      <div className={styles.menu} id="menu">
      <Image alt="Item_1" src="/skills/item_1.webp" layout="fill"/>
      <Image alt="Item_2" src="/skills/item_2.webp" layout="fill"/>
      <Image alt="Item_3" src="/skills/item_3.webp" layout="fill"/>
      <Image alt="Item_4" src="/skills/item_4.webp" layout="fill"/>
      </div>
    </div>
    <>
      <Script src={Wheel} />
    </>
  </section>
  
  )
}