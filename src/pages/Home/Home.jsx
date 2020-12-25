import React from "react";

import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.mainContent}>
      <h1>
        {"Hi, I'm "}
        <span className={styles.nameHighlight}>Maik</span>
      </h1>
      <p>I’m a Computer Science student</p>
      <p> and an aspiring developer</p>
    </div>
  </div>
);

export default Home;
