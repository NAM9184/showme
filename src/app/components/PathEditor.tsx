import React, {
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  useEffect,
} from "react";
import "./PathEditor.css"; // 애니메이션 스타일을 위한 CSS 파일을 임포트합니다.

const PathEditor: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [controlPointY, setControlPointY] = useState<number>(300); // 초기 제어점 Y 좌표
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // 애니메이션 상태
  const startCoords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (isAnimating) {
      // 애니메이션이 끝난 후 `onComplete` 콜백 호출
      const timer = setTimeout(() => {
        onComplete();
        setIsAnimating(false);
      }, 1000); // 애니메이션 기간
      return () => clearTimeout(timer);
    }
  }, [isAnimating, onComplete]);

  const handleMouseDown = (event: MouseEvent<SVGPathElement>) => {
    setIsDragging(true);
    startCoords.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseMove = (event: MouseEvent<SVGSVGElement>) => {
    if (isDragging) {
      const dy = event.clientY - startCoords.current.y;
      setControlPointY(controlPointY + dy);
      startCoords.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsAnimating(true); // 애니메이션 시작
  };

  const handleTouchStart = (event: TouchEvent<SVGPathElement>) => {
    setIsDragging(true);
    startCoords.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    event.preventDefault();
  };

  const handleTouchMove = (event: TouchEvent<SVGSVGElement>) => {
    if (isDragging) {
      const dy = event.touches[0].clientY - startCoords.current.y;
      setControlPointY(controlPointY + dy);
      startCoords.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
      event.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsAnimating(true); // 애니메이션 시작
  };

  // 화면 너비와 높이를 가져와서 중앙에서 수평으로 가로지르는 선을 설정합니다.
  const svgWidth = svgRef.current?.clientWidth || window.innerWidth;
  const svgHeight = svgRef.current?.clientHeight || window.innerHeight;

  // 화면 중앙에 위치하도록 조정
  const pathData = `
      M0,${svgHeight / 2} 
      L${svgWidth} ${svgHeight / 2} 
      Q${svgWidth / 2} ${controlPointY} ${svgWidth} ${svgHeight / 2}
    `;

  return (
    <svg
      ref={svgRef}
      width="100vw"
      height="100vh"
      style={{ border: "1px solid black", overflow: "visible" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <path
        d={pathData}
        stroke="white"
        strokeWidth="2"
        fill="none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={isAnimating ? "animate-path" : ""}
      />
    </svg>
  );
};

export default PathEditor;
