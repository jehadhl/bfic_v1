import React, { useRef, useEffect } from "react";
import styles from "./crossBlockchain.module.scss";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CrossBlockchain = () => {
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
        duration: 2,
        ease: ease,
        scrollTrigger: {
          trigger: content,
        },
      }
    );

    gsap.fromTo(
      images,
      { opacity: 0, y: "-200px", ease: ease },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: ease,
        scrollTrigger: {
          trigger: images,
        },
      }
    );
  }, []);

  return (
    <section className={styles.crossBlockchain}>
      <div className={styles.conatiner}>
        <div className={styles.gridSection}>
          <div className={styles.contents} ref={refConetnt}>
            <h1 className={styles.title}>
              CROSS-CHAIN <span className={styles.spanTitle}> Protocol </span>
            </h1>
            <p className={styles.paragraph}>
              A Cross-chain protocol to bridge Ethereum compatible blockchains
              with other blockchain networks. BFIC incorporates Interoperability
              protocol for arbitrary communication between Ethereum & other
              blockchain networks, making it effective to communicate with other
              networks and approve cross-chain validations.
            </p>
          </div>
          <div className={styles.images} ref={refImages}>
            <div className={styles.bficCoin}>
              <Image
                src="/assets/Images/blocksChains.png"
                width={960}
                height={650}
                quality={100}
                priority
                alt="croosImage"
                className={styles.imageBfic}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossBlockchain;
