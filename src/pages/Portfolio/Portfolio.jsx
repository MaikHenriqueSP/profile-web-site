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
      resourcesUsed: ["Spring Boot", "React", "Sass"],
      sourceCodeLink: ["http://github.com"],
      projectDescription:
        "This project was developed during the program 'Santander Coders by Digital House', it's intent is to intermediate the contact between independent workers and clients through classified ads allowing them to contact each other thorugh email",
      projectTitle: "iBicos (2020)",
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
