"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import styles from "./page.module.css";
import Header from "./components/Header";
import EmailForm from "@/page/contact";
import AboutPage from "@/page/about";
import ProjectList from "@/page/projects";
import { usePathname } from "next/navigation";

function MainContent() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>("/about");
  const [animationClass, setAnimationClass] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname) {
      console.log("현재 경로:", pathname); // 디버깅을 위해 경로를 콘솔에 출력합니다.
      setCurrentPage(pathname);
      setAnimationClass(styles.fadeExit); // 애니메이션 클래스 설정

      const fadeTimer = setTimeout(() => {
        setAnimationClass(styles.fadeEnter); // 애니메이션 종료 후 클래스 변경
        setLoading(false);
      }, 1500);

      return () => clearTimeout(fadeTimer); // 클린업 함수
    }
  }, [pathname]);

  return (
    <>
      {loading ? (
        <Loading /> // 로딩 중일 때 로딩 컴포넌트를 표시합니다.
      ) : (
        <main className={styles.main}>
          <section className={styles.sectionLeft}>
            <h1 className={styles.nameFirst}>Nam DongHyeon</h1>
            <p>다양한 경험에 접근하는 것이 목표입니다.</p>
            <Header />
          </section>
          <section className={`${styles.sectionRight} ${animationClass}`}>
            {currentPage === "/about" && <AboutPage />}
            {currentPage === "/projects" && <ProjectList />}
            {currentPage === "/contact" && <EmailForm />}
            {!["/about", "/projects", "/contact"].includes(currentPage) && (
              <AboutPage />
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default MainContent;
