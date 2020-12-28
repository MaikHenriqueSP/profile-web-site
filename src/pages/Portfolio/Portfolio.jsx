import React from "react";

import { Project } from "../../components/index";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const projectsDetails = [
    {
      resourcesUsed: ["Python", "Numpy", "Keras"],
      sourceCodeLink: ["http://github.com"],
      projectDescription:
        "This project was developed during a class and its intent is to be able to produce an agent capable of defeating all enemies from the Evoman game",
      projectTitle: "Neuroevolution with Keras (2019)",
    },
    {
      resourcesUsed: ["Python", "Numpy", "Keras"],
      sourceCodeLink: ["http://github.com"],
      projectDescription:
        "This project was developed during a class and its intent is to be able to produce an agent capable of defeating all enemies from the Evoman game",
      projectTitle: "Neuroevolution with Keras (2019)",
    },
  ];
  return (
    <section className={styles.container}>
      <header className={styles.pageTitle}>
        <h1>
          Here I present some projects that I’ve built during college, courses
          and in my spare time
        </h1>
      </header>
      <section className={styles.projectsContainer}>
        {projectsDetails.map((projectDetails) => (
          <Project projectDetails={projectDetails} />
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
