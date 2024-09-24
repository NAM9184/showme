"use client";

import Link from "next/link";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.information}>
        <h2 className={styles.boxTitle}>information</h2>
        <ul className={styles.links}>
          <li>
            <Link href="https://github.com/NAM9184">GitHub</Link>
          </li>
          <li>ruelline91@naver.com</li>
          <li>010-9184-8180</li>
        </ul>
      </div>
      <div className={styles.techStack}>
        <h2 className={styles.boxTitle}>tech list</h2>

        <div className={styles.skillsContainer}>
          <div className={styles.skillBox}>
            <h3>Language</h3>
            <div className={styles.skillList}>
              <span>Javascript</span>
              <span>Typescript</span>
            </div>
          </div>

          <div className={styles.skillBox}>
            <h3>Framework / Library</h3>
            <div className={styles.skillList}>
              <span>React</span>
            </div>
          </div>

          <div className={styles.skillBox}>
            <h3>MarkUp</h3>
            <div className={styles.skillList}>
              <span>HTML</span>
              <span>CSS</span>
              <span>SCSS</span>
              <span>Emotion</span>
            </div>
          </div>

          <div className={styles.skillBox}>
            <h3>Database</h3>
            <div className={styles.skillList}>
              <span>MongoDB</span>
              <span>Mongoose</span>
            </div>
          </div>

          <div className={styles.skillBox}>
            <h3>Tool</h3>
            <div className={styles.skillList}>
              <span>Git</span>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
