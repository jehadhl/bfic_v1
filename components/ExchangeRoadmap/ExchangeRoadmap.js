import React, { useRef } from "react";
import styles from "./ExchangeRoadmap.module.scss";
import Image from "next/image";
import { dateTime2 } from "@/utils/constants";
import { useDraggable } from "react-use-draggable-scroll";
import PointMark from "../TimeLine/PointMark/PointMark";
import PointTimeLine from "./PointTimeline/PointTimeLine";

const ExchangeRoadmap = () => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });
  return (
    <section className={styles.exchangeRoadmap}>
      <h1 className={styles.title}>
        Exchange listing <span className={styles.spanTitle}>roadmap</span>
      </h1>
      <div className={styles.container}>
        <Image
          src="/assets/Images/Maskright.png"
          width={500}
          height={500}
          className={styles.maskRight}
          priority
          quality={100}
        />

        <div className={styles.TimelinLoop} {...events} ref={ref}>
          {dateTime2.map((item) => {
            return <PointTimeLine data={item} />;
          })}
        </div>
      </div>

      <div className={styles.dragSwiper}>
        <Image
          src="/assets/icons/dragsvg.svg"
          width={29}
          height={42}
          quality={100}
        />
        <h1 className={styles.drag}>Drag the roadmap</h1>
      </div>
    </section>
  );
};

export default ExchangeRoadmap;
