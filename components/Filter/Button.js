import React, { useState } from "react";
import styles from "./Filter.module.scss";
import { btnFilter } from "@/utils/constants";
import { useContext } from "react";
import { ProjectContext } from "./Filter";

const Button = () => {
  const [tabActive, setTabActive] = useState(1);
  const { projects, setFilteredProjects } = useContext(ProjectContext);

  const handleClickFilter = (id) => {
    console.log(id, tabActive);
    setTabActive(id);
    const filteredProjectId = projects.filter((filter) => filter.id == id);
    if (id === 1) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(filteredProjectId);
    }
  };

  return (
    <div className={styles.btns}>
      {btnFilter.map((item) => {
        return (
          <button
            key={item.id}
            className={tabActive == item.id ? styles.active : styles.catagory}
            onClick={() => handleClickFilter(item.id)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
