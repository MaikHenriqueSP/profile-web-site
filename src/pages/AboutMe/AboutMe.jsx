import React from "react";
import styles from "./AboutMe.module.scss";

import profilePicture from "../../resources/img/profile-pic.jpeg";

const AboutMe = () => (
  <section className={styles.container}>
    <section className="profileDescription">
      <section>
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
      <section>
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
      <section>
        <header>
          <h2>Languages</h2>
        </header>
        <article>
          <ul>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
          </ul>
        </article>
      </section>
    </section>
    <section className="profileContact">
      <article className="profilePicture">
        <img src={profilePicture} alt="Maik's profile" />
      </article>
      <article className="professionalContact">
        <ul>
          <li>
            <a href="http://www.linkedin.com">Linkedin</a>
          </li>
          <li>
            <a href="http://www.github.com">Github</a>
          </li>
        </ul>
      </article>
    </section>
  </section>
);

export default AboutMe;
