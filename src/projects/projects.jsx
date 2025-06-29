import "./projects.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projectsData = t('projects.items', { returnObjects: true });
  
  // Ajout des données statiques qui ne changent pas avec la langue
  const projects = projectsData.map((project, index) => {
    const staticData = [
      { 
        image: "/Nouvlaire.png",
        link: "#"
      },
      { 
        image: "/screencapture-klaus-ma-1.png",
        link: "https://klaus.ma/"
      },
      { 
        image: "/P1_game.png",
        link: "https://time-game-zeta.vercel.app/"
      }
    ][index];
    
    return {
      ...project,
      ...staticData
    };
  });

  return (
    <div className="projects-container">
      <h2 className="projects-title">{t('projects.title')}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.viewProject')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
