"use client";

import { useRef, useEffect } from "react";
import styles from "./list.module.css";

const initialData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

function ListPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const offset = scrollHeight / 3; // 리스트를 3배로 늘려서 무한 스크롤 유지

      if (scrollTop <= 0) {
        // 🔄 최상단 -> 리스트를 아래로 순간 이동
        container.scrollTop = offset;
      } else if (scrollTop >= offset * 2) {
        // 🔄 최하단 -> 리스트를 위로 순간 이동
        container.scrollTop = offset;
      }
    };

    container.scrollTop = container.scrollHeight / 3; // 처음 위치 조정
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={styles.list}>
        {initialData
          .concat(initialData)
          .concat(initialData)
          .map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.item}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListPage;
