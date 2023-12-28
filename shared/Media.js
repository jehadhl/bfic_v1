import React from "react";
import Image from "next/image";
import styles from "./Meida.module.scss";

const Media = () => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src="/assets/icons/telegram.png"
          width={48}
          height={48}
          quality={100}
          priority
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>
      <div className={styles.card}>
        <Image
          src="/assets/icons/twiter.png"
          width={48}
          height={48}
          quality={100}
          priority
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>
      <div className={styles.card}>
        <Image
          src="/assets/icons/reddit.png"
          width={48}
          height={48}
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>

      <div className={styles.card}>
        <Image
          src="/assets/icons/github.png"
          width={48}
          height={48}
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>

      <div className={styles.card}>
        <Image
          src="/assets/icons/facebook.png"
          width={48}
          height={48}
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>

      <div className={styles.card}>
        <Image
          src="/assets/icons/instegram.png"
          width={48}
          height={48}
          alt="image"
        />
        <div className={styles.shadow} />
        <h2 className={styles.titleSocail}>Lorem ipsum </h2>
      </div>
    </>
  );
};

export default Media;
