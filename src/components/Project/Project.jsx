import React from "react";

import { ProjectIllustration, ProjectDescription } from "../index";
import githubIcon from "../../resources/img/github-icon.svg";

import styles from "./Project.module.scss";

const Project = () => {
  const projectDetails = {
    resourcesUsed: ["Python", "Numpy", "Keras"],
    sourceCodeLink: ["http://github.com"],
    projectDescription:
      "This project was developed during a class and its intent is to be able to produce an agent capable of defeating all enemies from the Evoman game",
    projectTitle: "Neuroevolution with Keras (2019)",
  };

  const {
    resourcesUsed,
    sourceCodeLink,
    projectDescription,
    projectTitle,
  } = projectDetails;

  return (
    <article className={styles.container}>
      <section className={styles.projectDescriptionContainer}>
        <div className={styles.projectDescription}>
          <header className={styles.projectHeader}>
            <h1>{projectTitle}</h1>
          </header>

          <article className={styles.generalDescription}>
            <p>{projectDescription}</p>
          </article>

          <ProjectDescription descriptionTitle="Technologies/Languages">
            <ul>
              {resourcesUsed.map((resource) => (
                <li>{resource}</li>
              ))}
            </ul>
          </ProjectDescription>

          <ProjectDescription descriptionTitle="Source Code">
            <a href={sourceCodeLink}>
              <img src={githubIcon} alt="Github source code link" />
            </a>
          </ProjectDescription>
        </div>
      </section>

      <ProjectIllustration />
    </article>
  );
};

export default Project;
