"use client";

import ProjectItem from "@/components/ProjectItem/ProjectItem";
import styles from "./ProjectList.module.css";

interface Project {
  id: number;
  title: string;
  description?: string;
  type?: string;
  isResponsive: boolean;
  level?: string;
  skills?: string[];
  features?: string[];
  status?: string;
  year?: number;
  thumbnail?: string;
  src?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Toucheese",
    description: "촬영 스튜디오 매칭 플랫폼 멋쟁이사자 인턴십",
    type: "웹 앱",
    isResponsive: true,
    level: "MVP",
    skills: ["Next.js", "Tailwind CSS", "Zustand"],
    features: ["예약 시스템", "스튜디오 검색", "결제 기능"],
    // status: "운영 중",
    year: 2024,
    thumbnail: "",
    src: "https://toucheese-macwin.store",
    github: "https://github.com/NAM9184/chuno-new",
  },
  {
    id: 2,
    title: "Chuno",
    description: "프론트엔드스쿨9기 팀 프로젝트",
    type: "웹사이트",
    isResponsive: true,
    skills: ["React", "vite"],
    status: "리팩토링 진행필요",
    year: 2024,
    thumbnail: "",
    src: "https://chuno9.netlify.app",
    github: "https://github.com/NAM9184/chuno-new",
  },
  {
    id: 3,
    title: "Lightyoung",
    description: "개인 홍보용 랜딩페이지",
    type: "랜딩페이지",
    isResponsive: true,
    // status: "운영 중",
    // year: 2023,
    src: "http://lightyoung.co.kr/",
  },
  {
    id: 4,
    title: "Alps",
    description: "팀 포트폴리오 프로젝트",
    type: "랜딩페이지",
    isResponsive: true,
    features: ["페이지 디자인, 마크업"],
    status: "",
    // year: 2022,
    src: "http://ruelline.co.kr/alps",
  },
  {
    id: 5,
    title: "diff",
    description: "개인 포트폴리오 프로젝트",
    type: "랜딩페이지",
    isResponsive: false,
    skills: ["Figma", "html", "scss"],
    status: "",
    // year: 2022,
    src: "http://ruelline.co.kr/diff",
  },
  {
    id: 6,
    title: "tour",
    description: "개인 포트폴리오 프로젝트",
    type: "웹사이트",
    isResponsive: false,
    skills: ["html", "scss"],
    year: 2022,
    status: "",
    src: "http://ruelline.co.kr/tour",
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
