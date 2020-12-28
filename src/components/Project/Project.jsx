import React from "react";
import PropTypes from "prop-types";

import { ProjectIllustration, ProjectDescription } from "../index";
import githubIcon from "../../resources/img/github-icon.svg";

import styles from "./Project.module.scss";

const Project = ({ projectDetails }) => {
  const {
    resourcesUsed,
    sourceCodeLink,
    projectDescription,
    projectTitle,
    imgIllustration,
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

      <ProjectIllustration imgIllustration={imgIllustration} />
    </article>
  );
};

Project.propTypes = {
  projectDetails: PropTypes.shape({
    resourcesUsed: PropTypes.string,
    sourceCodeLink: PropTypes.string,
    projectDescription: PropTypes.string,
    projectTitle: PropTypes.string,
    imgIllustration: PropTypes.string,
  }).isRequired,
};

export default Project;
