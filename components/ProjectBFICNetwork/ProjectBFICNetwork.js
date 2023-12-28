import React, { useRef, useEffect } from "react";
import styles from "./projectBFICNetwork.module.scss";
import Image from "next/image";
import { dataImage } from "../../utils/constants";

import { gsap, Power3 } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ProjectBFICNetwork = () => {
  const ease = new Power3.easeInOut();
  const refConetnt = useRef();
  const refImages = useRef();

  useEffect(() => {
    const content = refConetnt.current;
    const images = refImages.current;

    gsap.fromTo(
      content,
      { opacity: 0, y: "-200px", ease: ease },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: ease,
        scrollTrigger: {
          trigger: content,
        },
      }
    );

    gsap.fromTo(
      images,
      {
        opacity: 0,
        y: "200px",
        ease: ease,

        scaleX: 0,
        scaleY: 0,
      },
      {
        opacity: 1,
        rotation: 0,
        transformOrigin: "center",
        y: 0,
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        ease: ease,
        scrollTrigger: {
          trigger: images,
        },
      }
    );
  });

  return (
    <section className={styles.projectBFICNetwork}>
      <div className={styles.container}>
        <div className={styles.contents} ref={refConetnt}>
          <h1 className={styles.title}>
            Project In The{" "}
            <span className={styles.titleSpan}> BFIC Ecosystem </span>
          </h1>
          <p className={styles.paragraph}>
            BFIC is backed by an ever-growing utility based eco-system to assure
            its world-wide acceptance and usability.
          </p>
          <button className={styles.btn}>
            <Link href={"/ecosystem"}>bfic Ecosystem</Link>
          </button>
        </div>

        <div className={styles.projectImages} ref={refImages}>
          {dataImage.map((item) => {
            return (
              <Image
                src={item.imageUrl}
                key={item.id}
                priority
                quality={100}
                alt="image"
                className={styles.itemImage}
                width={130}
                height={130}
              />
            );
          })}
        </div>

        <div className={styles.boxImage}>
          <Image
            src="/assets/Images/earthcircle.png"
            className={styles.image}
            width={700}
            height={400}
            alt="image"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectBFICNetwork;
