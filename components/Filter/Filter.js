import React, { useState } from "react";
import Button from "./Button";
import Cards from "./Cards";
import styles from "./Filter.module.scss";
import { dataImage } from "@/utils/constants";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";

export const ProjectContext = createContext();

const Filter = () => {
  const [projects, setProjects] = useState(dataImage);
  const [filteredProjects, setFilteredProjects] = useState(dataImage);

  const value = {
    projects,
    filteredProjects,
    setFilteredProjects,
  };

  return (
    <ProjectContext.Provider value={value}>
      <section className={styles.filters}>
        <div className={styles.container}>
          {/* <Button /> */}
          <div className={styles.results}>
            <AnimatePresence>
              <Cards />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </ProjectContext.Provider>
  );
};

export default Filter;
