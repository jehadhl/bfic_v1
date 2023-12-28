import React from "react";
import styles from "./GetYourBfic.module.scss";
import Image from "next/image";
import Link from "next/link";

const GetYourBfic = () => {
  return (
    <section className={styles.GetYourBfic}>
      <div className={styles.container}>
        <h1 className={styles.titleGetYourBfic}>
          <span className={styles.spanTitle}>Get your </span>BFIC coin From
        </h1>

        <div className={styles.gridSection}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/xchangeon.svg"
                  width={64}
                  height={42}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Xchange On</h2>
              </div>
              <button className={styles.btn}>
                <Link href={"https://xchangeon.io/"}>Buy at XchanngeOn</Link>
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/dexa.svg"
                  width={64}
                  height={42}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Dexa</h2>
              </div>
              <button className={styles.btn}>
                <Link href={"https://dexa.exchange/"}>Buy at Dexa</Link>
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/LBANK-LOGO.svg"
                  width={64}
                  height={42}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Lbank</h2>
              </div>
              <button className={styles.btn}>
                <Link href={" https://www.lbank.info/"}>Buy at Lbank</Link>
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/di.svg"
                  width={64}
                  height={42}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Digifinex</h2>
              </div>
              <button className={styles.btn}>
                {" "}
                <Link href={"https://www.digifinex.com/"}>
                Buy at Digifinex
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/latoken.svg"
                  width={64}
                  height={42}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Latoken</h2>
              </div>
              <button className={styles.btn}>
                {" "}
                <Link href={"https://latoken.com/"}>Buy at Latoken</Link>
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.flexProjects}>
                <Image
                  src="/assets/Images/bi.svg"
                  width={64}
                  height={40}
                  quality={100}
                  priority
                  className={styles.logo}
                />
                <h2 className={styles.title}>Bitmart</h2>
              </div>
              <button className={styles.btn}>
                {" "}
                <Link href={"https://www.bitmart.com/"}>Buy at Bitmart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetYourBfic;
