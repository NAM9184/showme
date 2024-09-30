"use client";

// import { useState } from "react";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import styles from "./ProjectList.module.css";

const projects = [
  {
    id: 1,
    title: "Chuno",
    isResponsive: true,
    src: "https://chuno9.netlify.app",
  },
  {
    id: 2,
    title: "Lightyoung",
    isResponsive: true,
    src: "http://http://lightyoung.co.kr/",
  },
  {
    id: 3,
    title: "Alps",
    isResponsive: true,
    src: "http://ruelline.co.kr/alps",
  },
  {
    id: 4,
    title: "diff",
    isResponsive: false,
    src: "http://ruelline.co.kr/diff",
  },
  {
    id: 5,
    title: "tour",
    isResponsive: false,
    src: "http://ruelline.co.kr/tour",
  },

  // 더 많은 프로젝트
];

const ProjectList: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  // const handleClick = (title: string) => {
  //   setModalContent(title);
  //   setShowModal(true);
  // };

  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          // onClick={() => handleClick(project.title)}
          title={project.title}
          isResponsive={project.isResponsive}
          src={project.src}
        />
      ))}
      {/* {showModal && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Project: {modalContent}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProjectList;
