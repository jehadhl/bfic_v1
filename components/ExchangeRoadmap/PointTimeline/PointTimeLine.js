import React from "react";
import styles from "./PointTimeLine.module.scss";
import Image from "next/image";

const PointTimeLine = (props) => {
  const { detailsDown, detailsUp } = props.data;

  return (
    <>
      <div className={styles.contentTimeLine}>
        <div className={styles.imageBox}>
          <Image
            src="/assets/Images/Time-line v3.svg"
            width={600}
            height={650}
            alt="image"
            quality={100}
            priority
            className={styles.image}
          />
        </div>
        <div className={styles.listUp}>
          {detailsUp.dataUp.map((item) => {
            return item;
          })}
        </div>
        <div className={styles.monthUp}>{detailsUp.month}</div>
        <div className={styles.contentUp}>{detailsUp.date}</div>
        <div className={styles.contentDown}>{detailsDown.date}</div>
        <div className={styles.monthDown}>{detailsDown.month}</div>
        <div className={styles.listDown}>
          {detailsDown.dataDown.map((item) => {
            return item;
          })}
        </div>
      </div>
    </>
  );
};

export default PointTimeLine;
