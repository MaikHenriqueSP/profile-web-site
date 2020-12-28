import React from "react";
import PropTypes from "prop-types";

import styles from "./ProjectIllustration.module.scss";

const ProjectIllustration = ({ imgIllustration }) => (
  <section className={styles.container}>
    <article className={styles.imgContainer}>
      <img src={imgIllustration} alt="Evoman project illustration" />
    </article>
  </section>
);

ProjectIllustration.propTypes = {
  imgIllustration: PropTypes.string.isRequired,
};

export default ProjectIllustration;
