import React from "react";
import styles from "./AboutMe.module.scss";

import {
  profilePicture,
  linkedinIcon,
  githubIcon,
  javaIcon,
  javascriptIcon,
  pythonIcon,
  reactIcon,
  sqlIcon,
} from "../../resources/img/index";

const AboutMe = () => (
  <section className={styles.container}>
    <section className={styles.profileDescriptionContainer}>
      <section className={styles.profileDescripitionItem}>
        <header>
          <h2>About me</h2>
        </header>
        <article>
          <p>
            My name is Maik Henrique and I’m currently an on Computer Science
            undergraduate student at UFABC. Since I was a kid I’ve loved to
            learn about tech and discover how things worked, this passion led me
            to the desire to study programming in depth, I believe in technology
            as a power that is able to make people’s live better.
          </p>
        </article>
      </section>
      <section className={styles.profileDescripitionItem}>
        <header>
          <h2>Fields of Interest</h2>
        </header>
        <article>
          <ul>
            <li>Software engineering</li>
            <li>Automation</li>
            <li>Data engineering</li>
          </ul>
        </article>
      </section>
      <section className={styles.profileDescripitionItem}>
        <header>
          <h2>Languages</h2>
        </header>
        <article>
          <ul className={styles.knownLanguagesList}>
            <li>
              <img
                src={javaIcon}
                alt="Java icon"
                className={styles.defaultIcon}
              />
              <span>Java</span>
            </li>
            <li>
              <img
                src={javascriptIcon}
                alt="Javascript icon"
                className={styles.defaultIcon}
              />
              <span>Javascript</span>
            </li>
            <li>
              <img
                src={pythonIcon}
                alt="Python icon"
                className={styles.defaultIcon}
              />
              <span>Python</span>
            </li>
            <li>
              <img
                src={reactIcon}
                alt="React icon"
                className={styles.defaultIcon}
              />
              <span>React</span>
            </li>
            <li>
              <img
                src={sqlIcon}
                alt="SQL icon"
                className={styles.defaultIcon}
              />
              <span>SQL</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
    <section className={styles.profileContactContainer}>
      <article className={styles.profilePicture}>
        <img src={profilePicture} alt="Maik's profile" />
      </article>
      <article className={styles.professionalContact}>
        <ul>
          <li>
            <a href="http://www.linkedin.com">
              <img
                src={linkedinIcon}
                alt="Linkeding icon"
                className={styles.defaultIcon}
              />
            </a>
          </li>
          <li>
            <a href="http://www.github.com">
              <img
                src={githubIcon}
                alt="Github icon"
                className={styles.defaultIcon}
              />
            </a>
          </li>
        </ul>
      </article>
    </section>
  </section>
);

export default AboutMe;
