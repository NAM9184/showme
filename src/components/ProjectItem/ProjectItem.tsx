import Link from "next/link";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  title: string;
  isResponsive: boolean;
  src: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  isResponsive,
  src,
}) => {
  return (
    <div className={styles.projectItem}>
      <Link href={src || "/"}>
        <h3>{title}</h3>
        {isResponsive && (
          <span className={styles.responsiveBadge}>Responsive</span>
        )}
      </Link>
    </div>
  );
};

export default ProjectItem;
