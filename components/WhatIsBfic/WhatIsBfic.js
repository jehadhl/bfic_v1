import React, { useRef, useEffect, useState } from "react";
import styles from "./whatIsBfic.module.scss";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { apigetStatic, apiPriceUrl, dataBfic } from "@/utils/constants";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const WhatIsBfic = () => {
  const ease = new Power3.easeInOut();
  const refConetnt = useRef();
  const refImages = useRef();

  useEffect(() => {
    const content = refConetnt.current;
    const images = refImages.current;

    gsap.fromTo(
      content,
      { opacity: 0, y: "-150px" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: ease,
        scrollTrigger: {
          trigger: content,
        },
      }
    );

    gsap.fromTo(
      images,
      { opacity: 0, ease: ease },
      {
        opacity: 1,
        duration: 3,

        ease: ease,
        scrollTrigger: {
          trigger: images,
        },
      }
    );
  }, []);


  return (
    <section className={styles.whatIsBfic} id="aboutBfic">
      <div className={styles.scrollText}>
        <div className={styles.content}>
          <div className={styles.price}>
            <h2 className={styles.textItems}>Price</h2>
            <p className={styles.paragraphItems}>21$</p>
          </div>
          <div className={styles.price}>
            <h2 className={styles.textItems}>Total Transactions</h2>
            <p className={styles.paragraphItems}>
              1231244123
            </p>
          </div>
          <div className={styles.price}>
            <h2 className={styles.textItems}>Holders</h2>
            <p className={styles.paragraphItems}>1200000</p>
          </div>
          <div className={styles.price}>
            <h2 className={styles.textItems}>Block Time</h2>
            <p className={styles.paragraphItems}>
              31231233
            </p>
          </div>
       
        </div>
      </div>
      <div className={styles.conatiner}>
        <div className={styles.gridSection}>
          <div className={styles.contents} ref={refConetnt}>
            <h1 className={styles.title}>
              what is <span className={styles.spanTitle}> BFICOIN </span>
            </h1>
            <p className={styles.paragraph}>
              The native coin of BFIC Blockchain, a cross-chain Ethereum fork
              for layer 2 solutions. Listed with the ticker BFIC, the coin is
              rewarded to validators on the BFIC Blockchain, and used to record
              transactions across the blockchain.
            </p>

            <p className={styles.paragraph}>
              The BFIC Ecosystem comprises of 30+ utilities designed till date
              to enhance the real-life utility for the coin. The BFIC community
              has shown a massive growth as masses around the globe have started
              exploring the powerful utilities.
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.bficCoin} ref={refImages}>
              <Image
                src="/assets/Images/bficCoin.png"
                width={960}
                height={650}
                quality={100}
                priority
                alt="ibfic"
                className={styles.imageBfic}
              />
            </div>
            <div className={styles.earth}>
              <Image
                src="/assets/Images/earth.png"
                width={660}
                height={650}
                quality={100}
                priority
                alt="ibfic"
                className={styles.earthImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBfic;
