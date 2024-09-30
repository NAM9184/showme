import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

const LoadingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

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
