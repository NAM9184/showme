"use client"; // 클라이언트 전용 컴포넌트

import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.techStack}>
      <h2>기술 스택</h2>
      <table>
        <tbody>
          <tr>
            <th>Language</th>
            <td>
              <span>Javascript</span>
              <span>Typescript</span>
            </td>
          </tr>
          <tr>
            <th>Framework / Library</th>
            <td>
              <span>React</span>
            </td>
          </tr>
          <tr>
            <th>MarkUp</th>
            <td>
              <span>HTML</span>
              <span>CSS</span>
              <span>SCSS</span>
              <span>Emotion</span>
            </td>
          </tr>
          <tr>
            <th>Database</th>
            <td>
              <span>MongoDB</span>
              <span>Mongoose</span>
            </td>
          </tr>
          <tr>
            <th>Tool</th>
            <td>
              <span>Git</span>
              <span>Github</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutPage;
