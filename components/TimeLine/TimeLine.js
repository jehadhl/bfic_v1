import React, { useRef } from "react";
import styles from "./TimeLine.module.scss";
import Image from "next/image";
import PointMark from "./PointMark/PointMark";
import { dateTimeLine } from "@/utils/constants";
import { useDraggable } from "react-use-draggable-scroll";

const TimeLine = () => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });
  return (
    <section className={styles.timeLine} id="RoadMap">
      <div className={styles.content}>
        <h1 className={styles.titleContents}>RoadMap</h1>
        <p className={styles.paragraphContents}>
          Multiple utility projects are being planned further, with a notable
          milestone of listing BFIC on New York Stock Exchange by the year 2026.
        </p>
      </div>
      <div className={styles.container}>
        <Image
          src="/assets/Images/Maskright.png"
          width={500}
          height={500}
          className={styles.maskRight}
          priority
          alt="timeLine"
          quality={100}
        />

        <div className={styles.TimelinLoop} {...events} ref={ref}>
          {dateTimeLine.map((item) => {
            return <PointMark data={item} key={item.id}/>;
          })}
        </div>
      </div>

      <div className={styles.dragSwiper}>
        <Image
          src="/assets/icons/dragsvg.svg"
          width={29}
          height={42}
          alt="timeLine"
          quality={100}
        />
        <h1 className={styles.drag}>Drag the roadmap</h1>
      </div>
    </section>
  );
};

export default TimeLine;
