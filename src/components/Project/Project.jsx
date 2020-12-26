import React from "react";

import { ProjectIllustration } from "../index";
import githubIcon from "../../resources/img/github-icon.svg";

const Project = () => {
  const projectDetails = {
    resourcesUsed: ["Python", "Numpy", "Keras"],
    sourceCodeLink: ["http://github.com"],
  };

  const { resourcesUsed, sourceCodeLink } = projectDetails;
  return (
    <article className="container">
      <header className="projectHeader">
        <h1>Project name</h1>
      </header>
      <section className="projectDescriptionContainer">
        <article className="generalDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolore neque quia.
          </p>
        </article>
        <article>
          <header>
            <h2>Technologies/Languages</h2>
          </header>
          <ul>
            {resourcesUsed.map((resource) => (
              <li>{resource}</li>
            ))}
          </ul>
        </article>
        <article>
          <header>
            <h2>Source Code</h2>
          </header>
          <a href={sourceCodeLink}>
            <img src={githubIcon} alt="Github source code link" />
          </a>
        </article>
      </section>
      <ProjectIllustration />
    </article>
  );
};

export default Project;
