import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Slide left when={show} duration={500}>
      <div className={styles.sideBar}>
        <div className={styles.headerSideBar}>
          <Image
            src="/assets/Images/close.svg"
            width={30}
            height={30}
            quality={100}
            alt="close"
            className={styles.iconClose}
            onClick={() => setShow(!show)}
          />

          <Image
            src="/assets/Images/logoBfic.png"
            width={140}
            height={64}
            quality={100}
            alt="logo"
            className={styles.image}
          />

          <div></div>
        </div>

        <div className={styles.bodySlideBar}>
          <ul className={styles.listItem}>
            <li className={styles.item} onClick={handleClick}>
              <Link href={"/"}>HOME</Link>
            </li>
            <li className={styles.item} onClick={handleClick}>
              <Link href={"/ecosystem"}>ECOSYSTEM</Link>
            </li>
            {/* <li className={styles.item}>
              <Link href={"/community"} onClick={handleClick}>
                Community
              </Link>
            </li> */}
          </ul>

          <div className={styles.buttonsSlideBar}>
            <button className={styles.btn} onClick={handleClick}>
              <a href={"/assets/BFICYellowPaper.pdf"} download="bfic">
                White paper{" "}
              </a>
            </button>
            <button className={styles.btn}>
              <Link href={"/buyBfic"} onClick={handleClick}>
                BUY BFIC{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default SideBar;
