import Image from "next/image";
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image alt="" src="/favicon.webp" layout="fill"/>
    </div>
  );
};

export default Loader;
