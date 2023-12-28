import React from "react";
import styles from "./Trading.module.scss";
import Image from "next/image";
import Link from "next/link";

const Trading = ({ title, subject, logoPlatform, id, image }) => {
  const tradingInfo = ["Last Price", "24 Change", "7D Changes", "Last 7 Days "];
  return (
    <section className={styles.xchangeon}>
      <div className={styles.conatiner}>
        {id == 1 && (
          <div className={styles.flexContent}>
            <div className={styles.image}>
              <img src={image} className={styles.mask} />
              <div className={styles.cardTrading}>
                <Image src={logoPlatform} width={128} height={83}  alt="trade"/>
                <div className={styles.content}>
                  <h2 className={styles.titleLogo}>{title}</h2>
                  <p className={styles.paragraphLogo}>{subject}</p>
                </div>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.tableTrading}>
                {tradingInfo.map((item) => {
                  return (
                    <div className={styles.infos}>
                      <h2 className={styles.infosItem}>{item}</h2>
                    </div>
                  );
                })}
              </div>
              <div className={styles.boxTrading}>
                <h2 className={styles.textTrading}>$15.68</h2>
                <h2 className={styles.textTrading}>-1.06%</h2>
                <h2 className={styles.textTrading}>12.12%</h2>
                <Image
                  src="/assets/Images/Line Graph.png"
                  width={100}
                  alt="trade"
                  height={100}
                />
              </div>
              <button className={styles.btn}>buy at {title}</button>
            </div>
          </div>
        )}

        {id == 2 && (
          <div className={styles.flexContent}>
            <div className={styles.table}>
              <div className={styles.tableTrading}>
                {tradingInfo.map((item) => {
                  return (
                    <div className={styles.infos}>
                      <h2 className={styles.infosItem}>{item}</h2>
                    </div>
                  );
                })}
              </div>
              <div
                className={id == 2 ? styles.boxTradingDexa : styles.boxTrading}
              >
                <h2 className={styles.textTrading}>$15.68</h2>
                <h2 className={styles.textTrading}>-1.06%</h2>
                <h2 className={styles.textTrading}>12.12%</h2>
                <Image
                  src="/assets/Images/Line Graph.png"
                  width={100}
                  height={100}
                  alt="trade"
                />
              </div>
              <button className={styles.btn}>buy at {title}</button>
            </div>

            <div className={styles.image}>
              <img src={image} className={styles.mask} />
              <div
                className={
                  id == 2 ? styles.cardTradingDexa : styles.cardTrading
                }
              >
                <Image src={logoPlatform} width={128} height={83}  alt="trade"/>
                <div className={styles.content}>
                  <h2 className={styles.titleLogo}>{title}</h2>
                  <p className={styles.paragraphLogo}>{subject}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {id == 3 && (
          <div className={styles.flexContent}>
            <div className={styles.image}>
              <img src={image} className={styles.mask} />
              <div
                className={
                  id == 3 ? styles.cardTradingLbank : styles.cardTrading
                }
              >
                <Image src={logoPlatform} width={128} height={83}  alt="trade"/>
                <div className={styles.content}>
                  <h2 className={styles.titleLogo}>{title}</h2>
                  <p className={styles.paragraphLogo}>{subject}</p>
                </div>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.tableTrading}>
                {tradingInfo.map((item) => {
                  return (
                    <div className={styles.infos}>
                      <h2 className={styles.infosItem}>{item}</h2>
                    </div>
                  );
                })}
              </div>
              <div
                className={id == 3 ? styles.boxTradingLbank : styles.boxTrading}
              >
                <h2 className={styles.textTrading}>$15.68</h2>
                <h2 className={styles.textTrading}>-1.06%</h2>
                <h2 className={styles.textTrading}>12.12%</h2>
                <Image
                  src="/assets/Images/Line Graph.png"
                  width={100}
                  height={100}
                  alt="trade"
                />
              </div>
              <button className={styles.btn}>buy at {title}</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trading;
