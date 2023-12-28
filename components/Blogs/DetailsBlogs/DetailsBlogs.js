import React from "react";
import styles from "./DetailsBlogs.module.scss";
import Image from "next/image";
import Media from "@/shared/Media";

const DetailsBlogs = () => {
  return (
    <section className={styles.detailsBlogs}>
      <div className={styles.container}>
        <h1 className={styles.titleDetailsBlogs}>Events</h1>
        <Image
          src="/assets/images/blogsImage.png"
          width={1400}
          height={750}
          alt="image"
          quality={100}
          priority
          className={styles.image}
        />

      
      </div>
    </section>
  );
};

export default DetailsBlogs;
