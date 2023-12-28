import React, { useContext } from "react";
import { ProjectContext } from "./Filter";
import { motion } from "framer-motion";
import styles from "./Filter.module.scss";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Cards = () => {
  const { filteredProjects } = useContext(ProjectContext);
  return filteredProjects.map((item) => (
    <motion.div
      className={styles.cards}
      key={item.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={item.imageUrl}
        key={item.id}
        priority
        quality={100}
        className={styles.image}
        width={120}
        height={120}
        alt="logo"
      />
      <div className={styles.contents}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.paragraph}>{item.catagory}</p>
        <div className={styles.icons}>
           {item.socialMedia}
        </div>
      </div>
    </motion.div>
  ));
};

export default Cards;
