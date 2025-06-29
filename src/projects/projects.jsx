import "./projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plateforme d'apprentissage en ligne",
      description:
        "Développement d'une plateforme éducative interactive permettant aux utilisateurs d'apprendre en ligne avec suivi de progression, gestion des utilisateurs et contenus dynamiques.",
      technologies: ["React.js", "Laravel", "MySQL"],
      image: "/Nouvlaire.png",
      link: "#",
    },
    {
      id: 2,
      title: "Site E-commerce pour accessoires",
      description:
        "Création d'une boutique en ligne avec WordPress et WooCommerce, intégrant la gestion des produits, des commandes, des paiements et une interface administrateur personnalisée.",
      technologies: ["WordPress", "WooCommerce", "CMS"],
      image: "/screencapture-klaus-ma-1.png",
      link: "https://klaus.ma/",
    },
    {
      id: 3,
      title: "Jeu éducatif interactif",
      description:
        "Développement d’un mini-jeu ludique pour enfants visant à tester leurs connaissances via une interface animée, avec score et progression visuelle.",
      technologies: ["JavaScript", "HTML5", "CSS3", "PHP"],
      image: "/P1_game.png",
      link: "https://time-game-zeta.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Mes Projets</h2>

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
                Voir le projet →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
