import React from "react";
import { useTranslation } from "react-i18next";
import "./about.css";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="app-about">
      <div className="about-image">
        <img src="/aymane2.jpeg" alt="Aymane" className="profile-image" />
      </div>
      
      <div className="about-content">
        <h1>{t('about.title')}</h1>
        <p>{t('about.description1')}</p>
        <p>{t('about.description2')}</p>
      </div>
    </div>
  );
}
