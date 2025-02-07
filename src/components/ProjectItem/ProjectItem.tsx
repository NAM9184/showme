import styles from "./ProjectItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description?: string;
  type?: string;
  isResponsive: boolean;
  skills?: string[];
  status?: string;
  year?: number;
  thumbnail?: string;
  src?: string;
  github?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  type,
  // isResponsive,
  skills,
  status,
  year,
  thumbnail,
  src,
  github,
}) => {
  return (
    <div className={styles.projectItem}>
      {/* 프로젝트 썸네일 */}
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={200}
          layout="responsive"
          className={styles.thumbnail}
        />
      )}

      {/* 메타데이터 & 설명 */}
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <h3>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.right}>
          {type && (
            <p>
              <strong>유형:</strong> {type}
            </p>
          )}
          {skills && (
            <div className={styles.skills}>
              <strong>기술 스택:</strong>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {status && (
            <p>
              <strong>운영 상태:</strong> {status}
            </p>
          )}
          {year && (
            <p>
              <strong>개발 연도:</strong> {year}
            </p>
          )}
        </div>
      </div>

      {/* 링크 영역 */}
      <div className={styles.links}>
        {src && (
          <Link href={src} target="_blank" rel="noopener noreferrer">
            <p className={styles.link}>사이트 방문</p>
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <p className={styles.link}>GitHub</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
