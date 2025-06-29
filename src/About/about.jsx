import React from "react";
// import aymane2 from "../assets/aymane2.jpeg";
import "./about.css";

export default function About() {
  return (
    <div className="app-about">
      <div className="about-image">
        <img src="/aymane2.jpeg" alt="Aymane" className="profile-image" />
      </div>
      
      <div className="about-content">
        <h1>À propos de moi</h1>
        <p>
          Passionné par le développement web, je conçois des applications
          dynamiques en combinant la puissance de Laravel côté backend avec la
          réactivité de React côté frontend. Je m'intéresse particulièrement à
          la création d'interfaces fluides, intuitives et performantes, tout en
          assurant une architecture claire et un code bien structuré.
        </p>
        <p>
          Toujours en quête de progrès, j'aime relever de nouveaux défis, explorer des
          technologies innovantes et participer à des projets qui ont du sens.
        </p>
      </div>
    </div>
  );
}
