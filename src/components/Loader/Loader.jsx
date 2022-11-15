import Image from "next/image";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Image alt="Loader" src="/favicon.webp" layout="fill" />
      </div>
    </div>
  );
};

export default Loader;
