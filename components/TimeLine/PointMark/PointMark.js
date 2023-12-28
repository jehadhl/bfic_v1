import React from "react";
import Image from "next/image";
import styles from "./PointMark.module.scss";

function PointMark(props) {
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
          <div className={styles.listUp}>
            <ul className={styles.listItem}>
              {detailsUp.dataUp.map((item , index) => {
                return (
                  <li className={styles.item} key={item.id}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.contentUp}>{detailsUp.date}</div>
          <div className={styles.contentDown}>{detailsDown.date}</div>
          <div className={styles.listDown}>
            <ul className={styles.listItem}>
              {detailsDown.dataDown.map((item,index) => {
                return (
                  <li key={index} className={styles.item}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PointMark;
