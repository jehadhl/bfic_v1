import React from "react";
import styles from "./EcoSystemHero.module.scss";

const EcoSystemHero = () => {
  return (
    <section className={styles.EcoSystemHero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.spanTitle}>Utility </span>, That Helps the
          Future Digital Economy
        </h1>

        <p className={styles.paragraph}>
          To support an entire digital financial economy, any Digital Currency
          must have enough utility to create its demand and usability. BFIC is
          backed by an ever-growing utility based eco-system to assure its
          world-wide acceptance and usability.
        </p>
      </div>
    </section>
  );
};

export default EcoSystemHero;
