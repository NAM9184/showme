"use client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./page/Loading/page";
import styles from "./page.module.css";

import ProjectList from "./components/ProjectList/ProjectList";
import Header from "./components/Header";
import AboutPage from "./page/AboutPage/AboutPage";
import EmailForm from "./components/EmailForm";

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeOutTimer = setTimeout(() => {
        setShowLoading(false);
      }, 1500);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [loading]);

  return (
    <Router>
      {showLoading && <LoadingPage />}
      {!showLoading && <MainContent />}
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // 페이지 전환 시 애니메이션을 적용
    setAnimationClass(styles.fadeExit);
    const fadeTimer = setTimeout(() => {
      setCurrentPage(location.pathname);
      setAnimationClass(styles.fadeEnter);
    }, 500); // fadeOut 시간에 맞춰 500ms

    return () => clearTimeout(fadeTimer);
  }, [location.pathname]);

  return (
    <main className={styles.main}>
      <section className={styles.sectionLeft}>
        <h1 className={styles.nameFirst}>Nam DongHyeon</h1>
        <p>다양한 경험에 접근하는 것이 목표입니다.</p>
        <Header />
      </section>
      <section className={`${styles.sectionRight} ${animationClass}`}>
        <Routes key={currentPage}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/contact" element={<EmailForm />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
