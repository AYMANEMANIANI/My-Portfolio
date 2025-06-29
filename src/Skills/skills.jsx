import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiBootstrap,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiJira,
  SiWordpress,
  SiWoocommerce
} from "react-icons/si";
import { BiServer } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "./skills.css";

export default function Skills() {
  const { t } = useTranslation();
  const frontendSkills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
    { id: 3, name: "JavaScript", icon: <FaJs />, color: "#F0DB4F" },
    { id: 4, name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    { id: 5, name: "React", icon: <FaReact />, color: "#61DAFB" },
    { id: 6, name: "Angular", icon: <FaAngular />, color: "#DD0031" },
    { id: 7, name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { id: 8, name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { id: 9, name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  ];

  const backendSkills = [
    { id: 1, name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { id: 2, name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { id: 3, name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { id: 4, name: "API REST", icon: <BiServer />, color: "#4E9A51" },
  ];

  const databaseSkills = [
    { id: 1, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { id: 2, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ];

  const toolsSkills = [
    { id: 1, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { id: 2, name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { id: 3, name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { id: 4, name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { id: 5, name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { id: 6, name: "Jira", icon: <SiJira />, color: "#0052CC" },
    { id: 7, name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
    { id: 8, name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">{t('skills.title')}</h2>

      <section className="skills-section" style={{ "--delay": 1 }}>
        <h3>{t('skills.frontend')}</h3>
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-item"
              style={{
                "--skill-color": skill.color,
                "--delay": 1 + index * 0.1,
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section" style={{ "--delay": 2 }}>
        <h3>{t('skills.backend')}</h3>
        <div className="skills-grid">
          {backendSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-item"
              style={{
                "--skill-color": skill.color,
                "--delay": 2 + index * 0.15,
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section" style={{ "--delay": 3 }}>
        <h3>{t('skills.database')}</h3>
        <div className="skills-grid">
          {databaseSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-item"
              style={{
                "--skill-color": skill.color,
                "--delay": 3 + index * 0.2,
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section" style={{ "--delay": 4 }}>
        <h3>{t('skills.tools')}</h3>
        <div className="skills-grid">
          {toolsSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-item"
              style={{
                "--skill-color": skill.color,
                "--delay": 4 + index * 0.1,
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
