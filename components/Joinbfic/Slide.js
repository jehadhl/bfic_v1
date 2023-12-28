import React from "react";
import Image from "next/image";
import styles from "./JoinBfic.module.scss";

function Slide({ imgs, caption }) {
  if (caption === "normal") {
    return (
      <div className={styles.normalImage}>
        {imgs.map((item) => {
          return (
            <img
              src={item.imgUrl}
              key={item.id}
              alt="image"
              className={styles.normalImages}
            />
          );
        })}
      </div>
    );
  }
  if (caption === "up") {
    return (
      <div className={styles.upImage}>
        {imgs.map((item) => {
          return (
            <img
              src={item.imgUrl}
              key={item.id}
              className={styles.upImages}
              alt="image"
            />
          );
        })}
      </div>
    );
  }

  if (caption === "down") {
    return (
      <div className={styles.downImage}>
        {imgs.map((item) => {
          return (
            <img
              src={item.imgUrl}
              key={item.id}
              alt="image"
              className={styles.downImages}
            />
          );
        })}
      </div>
    );
  }
}
export default Slide;
