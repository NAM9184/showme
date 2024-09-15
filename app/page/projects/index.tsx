"use client";

import { useState } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import styles from "./ProjectList.module.css";

const projects = [
  { id: 1, title: "Project A", isResponsive: true, src: "123" },
  { id: 2, title: "Project B", isResponsive: false, src: "123" },
  { id: 3, title: "Project B", isResponsive: false, src: "123" },
  { id: 4, title: "Project B", isResponsive: false, src: "123" },

  // 더 많은 프로젝트
];

const ProjectList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClick = (title: string) => {
    setModalContent(title);
    setShowModal(true);
  };

  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <div key={project.id} onClick={() => handleClick(project.title)}>
          <ProjectItem
            title={project.title}
            isResponsive={project.isResponsive}
            src={project.src}
          />
        </div>
      ))}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Project: {modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
