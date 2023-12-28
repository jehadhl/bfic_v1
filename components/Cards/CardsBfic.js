import React from "react";
import styles from "./Cards.module.scss";
import Image from "next/image";

const CardsBfic = () => {
  return (
    <section className={styles.cards}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Image
              src="/assets/icons/coins.svg"
              width={150}
              height={110}
              quality={100}
              alt="cards"
              className={styles.image}
            />
            <h3 className={styles.title}>Total Supply</h3>
            <h1 className={styles.number}>21 Million </h1>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Image
              src="/assets/icons/supply.svg"
              width={150}
              height={110}
              quality={100}
              alt="cards"
              className={styles.image}
            />
            <h3 className={styles.title}>Circulating Supply</h3>
            <h1 className={styles.number}>1 Million </h1>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Image
              src="/assets/icons/comminty.svg"
              width={150}
              height={110}
              quality={100}
              alt="cards"
              className={styles.image}
            />
            <h3 className={styles.title}>Community</h3>
            <h1 className={styles.number}>+4 Million </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsBfic;
