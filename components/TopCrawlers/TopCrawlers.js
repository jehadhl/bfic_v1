import React from "react";
import styles from "./TopCrawlers.module.scss";
import { dataTopCrawles } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const TopCrawlers = () => {
  return (
    <section className={styles.TopCrawlers}>
      <h1 className={styles.title}>
        Listed on <span className={styles.spanTitle}> top crawlers </span>
      </h1>
      <div className={styles.conatiner}>
        <div className={styles.logos}>
          <div className={styles.imagesTopCrawlers}>
            {dataTopCrawles.map((item) => {
              return (
                <Link href={"/"} key={item.id}>
                  <Image
                    src={item.imageUrl}
                    width={72}
                    height={72}
                    quality={100}
                    priority
                    className={styles.imageUrl}
                    alt="images"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCrawlers;
