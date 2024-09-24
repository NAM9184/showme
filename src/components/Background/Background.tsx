"use client";

import { useEffect, useRef } from "react";

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const offsetRef = useRef(0); // 물결 애니메이션을 위한 오프셋 저장

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawWave = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(0, 123, 255, 0.15)";
      ctx.lineWidth = 2;

      const waveHeight = 20;
      const waveLength = 200;
      const amplitude = 20;

      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        const offset = i * waveHeight;
        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            offset +
            Math.sin(x / waveLength + offsetRef.current + i) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 오프셋을 증가시켜 물결이 움직이는 효과를 줌
      offsetRef.current += 0.01; // 움직임의 속도를 조절
    };

    const animate = () => {
      drawWave();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 크기 설정

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default WaveBackground;
