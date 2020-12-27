import React from "react";

import PropTypes from "prop-types";

import styles from "./ProjectDescription.module.scss";

const ProjectDescription = ({ children, descriptionTitle }) => (
  <article className={styles.container}>
    <header>
      <h2>{descriptionTitle}</h2>
    </header>
    <article className={styles.content}>{children}</article>
  </article>
);

ProjectDescription.propTypes = {
  children: PropTypes.element.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
};

export default ProjectDescription;
