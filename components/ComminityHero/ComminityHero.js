import React from "react";
import styles from "./ComminityHero.module.scss";

const ComminityHero = () => {
  return (
    <section className={styles.comminityHero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to the{" "}
          <span className={styles.spanTitle}> BFIC community Hub </span>
        </h1>
        <p className={styles.paragraph}>
          The BFIC community is home to hundreds of thousands people from all
          around the world.
        </p>
      </div>
    </section>
  );
};

export default ComminityHero;
