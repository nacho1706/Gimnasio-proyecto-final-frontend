// src/components/AboutUs.jsx
import React from "react";
import "../pages/style/AboutUs.css";

const teamMembers = [
  {
    name: "Facundo Parizzi",
    description: "Descripción del Integrante 1.",
    imageUrl: "url_de_imagen_integrante_1.jpg",
  },
  {
    name: "Agustina Prado",
    description: "Descripción del Integrante 2.",
    imageUrl: "url_de_imagen_integrante_2.jpg",
  },
  {
    name: "Ignacio Albarracin",
    description: "Descripción del Integrante 3.",
    imageUrl: "url_de_imagen_integrante_3.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us text-white">
      <h1>Acerca de Nosotros</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member text-white">
            <img src={member.imageUrl} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
