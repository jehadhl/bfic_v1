import React from "react";
import styles from "./SocailMedia.module.scss";
import Media from "@/shared/Media";

const SocailMedia = () => {
  return (
    <section className={styles.socailMedia}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Join our{" "}
          <span className={styles.spanTitle}> social media platforms </span>
        </h1>

        <div className={styles.flexSocailMedia}>
          <Media />
        </div>
      </div>
    </section>
  );
};

export default SocailMedia;
