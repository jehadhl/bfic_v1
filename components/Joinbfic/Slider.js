import React from "react";
import { joinBfic } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./JoinBfic.module.scss";

import { Autoplay } from "swiper";
import Slide from "./Slide";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      speed={5000}
      className={styles.slider}
    >
      {joinBfic.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            className={item.caption === "normal" ? styles.slide : styles.group}
          >
            <Slide imgs={item.imgs} caption={item.caption} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
