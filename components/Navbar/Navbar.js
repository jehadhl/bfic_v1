import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const hanldeClick = () => {
    setToggle(!toggle);
    console.log("hello");
  };

  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const fixed = () => {
      if (window.scrollY >= 150) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", fixed);
  }, []);

  return (
    <header className={colorChange ? styles.headerChangeColor : styles.header}>
      <div className={styles.container}>
        <div className={styles.menuNavbar}>
          <Image
            src="/assets/Images/menu.svg"
            width={30}
            height={30}
            className={styles.menu}
            alt="images"
            onClick={hanldeClick}
          />

          {toggle && <SideBar />}
        </div>

       

        <div className={styles.logoImage}>
          <Link href={"/"}>
          <Image
            src="/assets/Images/logoBfic.png"
            width={140}
            height={64}
            quality={100}
            alt="logo"
          />
          </Link>
        </div>

       

        <nav className={styles.navbar}>
          <ul className={styles.listItem}>
            <li className={styles.item}>
              <Link href={"/"}>HOME</Link>
            </li>
            <li className={styles.item}>
              <Link href={"/ecosystem"}>ECOSYSTEM </Link>
            </li>
            {/* <li className={styles.item}>
              <Link href={"/community"}>Community </Link>
            </li> */}
          </ul>
        </nav>

   
        <div className="S-250:block S-1000:hidden"/>
        <div className={styles.buttons}>
          <button className={styles.btn}>
            {" "}
            <a href={"/assets/BFICYellowPaper.pdf"} download="bfic">
              White paper{" "}
            </a>
          </button>

          <Link href={"/buyBfic"} className={styles.btn}>
            BUY BFIC{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
