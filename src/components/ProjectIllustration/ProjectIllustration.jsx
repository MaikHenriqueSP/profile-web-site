import React from "react";

import evomanIllustration from "../../resources/img/projetcts-illustration/evoman.png";
import styles from "./ProjectIllustration.module.scss";

const ProjectIllustration = () => (
  <section className={styles.container}>
    <article className={styles.imgContainer}>
      <img src={evomanIllustration} alt="Evoman project illustration" />
    </article>
  </section>
);

export default ProjectIllustration;
