import React from "react";

import { Project } from "../../components/index";

import styles from "./Portfolio.module.scss";

import {
  pokeAppIllustration,
  evomanIllustration,
  ibicosIllustration,
} from "../../resources/img/index";

const Portfolio = () => {
  const projectsDetails = [
    {
      resourcesUsed: ["Python", "Numpy", "Keras"],
      sourceCodeLink: [
        "https://github.com/MaikHenriqueSP/NeuroEvolution-with-Keras",
      ],
      projectDescription:
        "This project was developed during a class in college and its intent is to be able to produce an agent capable of defeating all enemies in the Evoman game.",
      projectTitle: "Neuroevolution with Keras (2019)",
      imgIllustration: evomanIllustration,
    },
    {
      resourcesUsed: ["React", "Sass"],
      sourceCodeLink: ["https://github.com/MaikHenriqueSP/React-Poke-App"],
      projectDescription:
        "This project was developed during my spare time with the intention of practicing react basics.",
      projectTitle: "Poke-App (2020)",
      imgIllustration: pokeAppIllustration,
    },
    {
      resourcesUsed: ["Spring Boot", "React", "Sass"],
      sourceCodeLink: [
        "https://github.com/orgs/Classificantes-DH/teams/developers/repositories",
      ],
      projectDescription:
        "This project was developed during the program 'Santander Coders by Digital House', it's intent is to intermediate the contact between independent workers and clients through classified ads allowing them to contact each other thorugh email.",
      projectTitle: "iBicos (2020)",
      imgIllustration: ibicosIllustration,
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
