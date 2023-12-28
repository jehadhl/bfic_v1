import React from "react";
import styles from "./SupportedWallets.module.scss";
import Image from "next/image";

const SupportedWallets = () => {
  return (
    <section className={styles.supportedWallets}>
      <h1 className={styles.title}>
        supported <span className={styles.spanTitle}> wallets </span>
      </h1>
      <div className={styles.container}>
        <div className={styles.supportedWallets}>
          <div className={styles.projects}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/assets/Images/loveWallet.svg"
                  width={80}
                  height={80}
                  quality={100}
                  alt="image"
                  priority
                />
              </div>
            </div>
            <h2 className={styles.titleProjects}>love wallet</h2>
          </div>

          <div className={styles.projects}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/assets/icons/Artboard.svg"
                  width={80}
                  height={80}
                  quality={100}
                  alt="image"
                  priority
                />
              </div>
            </div>
            <h2 className={styles.titleProjects}>MyCrypto</h2>
          </div>

          <div className={styles.projects}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/assets/icons/metamask.svg"
                  width={80}
                  height={80}
                  quality={100}
                  alt="image"
                  priority
                />
              </div>
            </div>
            <h2 className={styles.titleProjects}>Meta mask</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedWallets;
