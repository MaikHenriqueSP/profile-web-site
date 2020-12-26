import React from "react";

import { Project } from "../../components/index";

const Portfolio = () => (
  <section className="container">
    <header className="pageTitle">
      <h1>
        Here I present some projects that I’ve built during college, courses and
        in my spare time
      </h1>
    </header>
    <section className="projectsContainer">
      <Project />
    </section>
  </section>
);

export default Portfolio;
