import { Link } from "react-router-dom";
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
      <Link to={src || "/"}>
        <h3>{title}</h3>
        {isResponsive && (
          <span className={styles.responsiveBadge}>Responsive</span>
        )}
      </Link>
    </div>
  );
};

export default ProjectItem;
