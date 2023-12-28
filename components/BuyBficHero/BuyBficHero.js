import React from "react";
import styles from "./BuyBficHero.module.scss";
import Image from "next/image";

const BuyBficHero = () => {
  return (
    <section className={styles.buyBficHero}>
      <div className={styles.container}>
        <div className={styles.flexConetnt}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Listed on
              <span className={styles.titleSpan}> 6 Exchanges </span>
              <br />
              And
              <span className={styles.titleSpan}> 10+ Crawlers </span>
            </h1>
            <p className={styles.paragraph}>
              BFICoin has a steady growth-oriented roadmap for exchange and
              crawler listings.
            </p>
          </div>
          <div className={styles.boxImage}>
            <Image
              src="/assets/Images/handsBuyBfic.png"
              className={styles.image}
              width={700}
              height={700}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBficHero;
