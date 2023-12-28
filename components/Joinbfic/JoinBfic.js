import React from "react";
import styles from "./JoinBfic.module.scss";
import Image from "next/image";

import Slider from "./Slider";

const JoinBfic = () => {
  return (
    <section className={styles.JoinBfic}>
      <div className={styles.contents}>
        <h1 className={styles.title}>
          Join the <span className={styles.titleSpan}> bFIC community </span>
        </h1>
        <p className={styles.paragraph}>
          Meet, Join, and know about the latest events, Webinars and a lot more,
          follow us in social media to keep updated with our lates news.
        </p>
        <button className={styles.btn}>Learn more</button>
      </div>

      <div className={styles.slideImages}>
        <Image
          src="/assets/Images/portal1.png"
          width={600}
          height={700}
          alt="join"
          className={styles.imageLeft}
        />
        <div className={styles.sliderImage}>
          <Slider />
        </div>
        <Image
          src="/assets/Images/portal2.png"
          width={600}
          height={700}
          alt="join"
          className={styles.imageRight}
        />
      </div>
    </section>
  );
};

export default JoinBfic;
