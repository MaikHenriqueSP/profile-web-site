import React from "react";

import { Project } from "../../components/index";

import styles from "./Portfolio.module.scss";

const Portfolio = () => (
  <section className={styles.container}>
    <header className={styles.pageTitle}>
      <h1>
        Here I present some projects that I’ve built during college, courses and
        in my spare time
      </h1>
    </header>
    <section className={styles.projectsContainer}>
      <Project />
      <Project />
    </section>
  </section>
);

export default Portfolio;
