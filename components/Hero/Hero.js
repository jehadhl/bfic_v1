import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { dataBfic } from "../../utils/constants";
import { gsap, Power3 } from "gsap";
import Link from "next/link";

const Hero = () => {
  let ease = Power3.easeInOut;

  const refImageLeft = useRef();
  const refImageRight = useRef();
  const reftImageMiddle = useRef();
  const refContents = useRef();

  useEffect(() => {
    const left = refImageLeft.current;
    const right = refImageRight.current;
    const middle = reftImageMiddle.current;
    const contentText = refContents.current;

    gsap.fromTo(
      left,
      { opacity: 0, x: "-200px", ease: ease },
      { opacity: 1, x: 0, duration: 1.2, ease: ease }
    );
    gsap.fromTo(
      right,
      { opacity: 0, x: "200px", ease: ease },
      { opacity: 1, x: 0, duration: 1.2, ease: ease }
    );
    gsap.fromTo(
      middle,
      { opacity: 0, y: "250px", ease: ease },
      { opacity: 1, y: 0, duration: 1.2, ease: ease }
    );
    gsap.fromTo(
      contentText,
      { opacity: 0, y: "200px", ease: ease },
      { opacity: 1, y: 0, ease: ease, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/assets/Images/glowing-hand-fina-V2-3.png"
            className={styles.photo}
            width={400}
            height={400}
            quality={100}
            priority
            alt="handsLfet"
            ref={refImageLeft}
          />

          <Image
            src="/assets/Images/v2.png"
            className={styles.photo}
            width={700}
            height={400}
            quality={100}
            priority
            alt="coin"
            ref={reftImageMiddle}
          />

          <Image
            src="/assets/Images/glowing-hand-fina-V2-1.png"
            className={styles.photo}
            width={400}
            height={400}
            quality={100}
            priority
            alt="handsLright"
            ref={refImageRight}
          />
        </div>

        <div className={styles.content} ref={refContents}>
          <div className={styles.contentHero}>
            <h1 className={styles.text}>
              UTILITY FOR THE NEW{" "}
              <span className={styles.textSpan}>FUTURE </span>
            </h1>
            <p className={styles.paragraph}>
              Crypto Coin designed to create its own utility and support a
              digital economic system.
            </p>
            <button className={styles.btn}>
              <Link href={"/buyBfic"}>BUY BFIC </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
