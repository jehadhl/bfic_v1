import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.container_footer}>
            <div className={styles.logo_footer}>
              <Image
                src="/assets/Images/logoBfic.png"
                width={120}
                height={64}
                alt="logo"
              />
            </div>
            <div className={styles.Items}>
              <h3 className={styles.title}>
                <Link href={"/"}>Home</Link>
              </h3>
              <ul className={styles.listItem}>
                <li className={styles.item}>
                  <LinkScroll smooth spy to="aboutBfic">
                    <u>About BFIC</u>
                  </LinkScroll>
                </li>
                <li className={styles.item}>
                  <LinkScroll smooth spy to="bficBlockChain">
                    <u>BFIC Blockchain</u>
                  </LinkScroll>
                </li>
                <li className={styles.item}>
                  <LinkScroll smooth spy to="RoadMap">
                    <u>Road Map </u>
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className={styles.Items}>
              <h3 className={styles.title}>Ecosystem</h3>
              <ul className={styles.listItem}>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>Crypto Commerce </u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>DeFi</u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>GameFi </u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>NFT</u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>Pos</u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"/ecosystem"}>
                    <u>Wallet</u>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.Items}>
              <h3 className={styles.title}>Social</h3>
              <ul className={styles.listItem}>
                <li className={styles.item}>
                  <Link href={"https://www.instagram.com/bficoin/"}>
                    <u>Instagram</u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"https://t.me/bficoinofficialgroup"}>
                    <u>Telegram </u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"https://twitter.com/BfiCoin"}>
                    <u>Twitter </u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"https://www.facebook.com/bficoinofficial"}>
                    <u>Facebook</u>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href={"https://www.youtube.com/@BFICoin"}>
                    <u>Youtube</u>
                  </Link>
                </li>

                <li className={styles.item}>
                  <Link href={"https://discord.gg/35cycbW5dT"}>
                    <u>Discord</u>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.infoBtn}>
              <div className={styles.btnAboutBfic}>
                <h1 className={styles.titleAboutBfic}>
                  Know More About{" "}
                  <span className={styles.spanTitle}>BFICOIN </span>
                </h1>
                <button className={styles.btnBfic}>
                  {" "}
                  <a href={"/assets/BFICYellowPaper.pdf"} download="bfic">
                    White paper{" "}
                  </a>
                </button>
              </div>
              <div className={styles.btnbuyBfic}>
                <h1 className={styles.titleBuyBfic}>
                  Where To Buy{" "}
                  <span className={styles.spanTitle}>BFICOIN </span>
                </h1>
                <button className={styles.btnBuyBfic}>
                  {" "}
                  <Link href={"/buyBfic"}>BUY BFIC </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.copy}>
        <h2 className={styles.copyRight}>
          © Copyright 2023 All rights are reserved by Innovation Factory
        </h2>
      </div>
    </>
  );
};

export default Footer;
