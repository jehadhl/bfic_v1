import React, { useRef, useEffect } from "react";
import styles from "./BficBlockChain.module.scss";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BficBlockChain = () => {
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
    <section className={styles.bficBlockChain} id="bficBlockChain">
      <div className={styles.conatiner}>
        <div className={styles.gridSection}>
          <div className={styles.images} ref={refImages}>
            <div className={styles.bficblockChainImage}>
              <Image
                src="/assets/Images/blockChain.png"
                width={660}
                height={650}
                quality={100}
                priority
                alt="blockchaim"
                className={styles.imageBlockchain}
              />
            </div>
          </div>

          <div className={styles.contents} ref={refConetnt}>
            <h1 className={styles.title}>
              <span className={styles.spanTitle}> BFIC </span> Blockchain
            </h1>
            <p className={styles.paragraph}>
              BFIC Blockchain is equipped with the core tools and components
              that are essential to build a borderless economy.
            </p>

            <p className={styles.paragraph}>
              The BFIC protocol combines the developer experience,
              interoperability & security of Ethereum with optimized features of
              numerous stand-alone blockchains to add sovereignty, flexibility
              and scalability. This provides an exceptional compatibility with
              the current Ethereum components and enables communication between
              Ethereum and sovereign blockchains.
            </p>

            <button className={styles.btn}>
              <a href={"/assets/BFICYellowPaper.pdf"} download="bfic">
                Download White Paper{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BficBlockChain;
