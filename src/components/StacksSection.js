// StacksSection.js
import React, { useState } from 'react';
import SkillSection from './SkillSection';

const StacksSection = ({ darkMode }) => {
  const [likedProjects, setLikedProjects] = useState([]);

  const toggleLike = (projectId) => {
    if (likedProjects.includes(projectId)) {
      setLikedProjects(likedProjects.filter((id) => id !== projectId));
    } else {
      setLikedProjects([...likedProjects, projectId]);
    }
  };

  const skillsData = [
    {
      title: "Front-End",
      description: "Criação de interfaces minimalistas, intuitivas e agradáveis ao usuário. Utilizamos as tecnologias mais modernas do mercado e seguimos boas práticas de SEO para garantir que os projetos tenham uma presença online eficaz e se destaquem nos motores de busca.",
    },
    {
      title: "Back-End",
      description: "Vital de um projeto digital que permite a funcionalidade e a estabilidade de um site ou aplicativo, e minhas habilidades nessa área são fundamentais para garantir que as operações ocorram de maneira eficiente e confiável. Trabalho de forma dedicada e cuidadosa, sempre buscando aprimorar meus conhecimentos para atender às necessidades dos sistemas que desenvolvo.",
    },
    {
      title: "Mobile",
      description: "No contexto mobile, foco em criar interfaces e experiências de usuário otimizadas para dispositivos móveis, garantindo que os aplicativos sejam acessíveis, intuitivos e responsivos em diferentes tamanhos de tela. Minhas habilidades são direcionadas para proporcionar uma navegação fluida e uma aparência atraente em dispositivos móveis, promovendo uma experiência satisfatória para os usuários.",
    },
  ];

  return (
    <main className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      <h1 className="text-2xl font-bold text-center mb-20">Minhas Habilidades</h1>
      <article className={`container mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}>
        {skillsData.map((skill, index) => (
          <SkillSection
            key={index}
            title={skill.title}
            description={skill.description}
            likedProjects={likedProjects}
            toggleLike={toggleLike}
            darkMode={darkMode}
          />
        ))}
      </article>
    </main>
  );
};

export default StacksSection;
