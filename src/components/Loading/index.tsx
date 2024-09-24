import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

const LoadingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true); // 로딩이 끝나면 fadeOut 상태를 true로 설정
    }, 2000); // 로딩 시간 3초

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.loadingContainer} ${fadeOut ? styles.fadeOut : ""}`}
    >
      <span className={styles.letter} style={{ animationDelay: "0s" }}>
        N
      </span>
      <span className={styles.letter} style={{ animationDelay: "0.3s" }}>
        D
      </span>
      <span className={styles.letter} style={{ animationDelay: "0.6s" }}>
        H
      </span>
    </div>
  );
};

export default LoadingPage;
