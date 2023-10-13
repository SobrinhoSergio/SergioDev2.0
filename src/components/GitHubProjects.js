import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [likedProjects, setLikedProjects] = useState([]);
  const [showLessProjects, setShowLessProjects] = useState(true);

  useEffect(() => {
    const url = 'https://api.github.com/users/sobrinhosergio/repos';

    axios.get(url)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos do GitHub:', error);
      });
  }, []);

  const toggleLike = (projectId) => {
    if (likedProjects.includes(projectId)) {
      setLikedProjects(likedProjects.filter(id => id !== projectId));
    } else {
      setLikedProjects([...likedProjects, projectId]);
    }
  };

  const visibleProjects = showLessProjects ? projects.slice(0, 9) : projects;

  return (
    <main>
      <div className="mx-auto w-4/5">
        <h1>Meus Projetos</h1>
        <p>Tenho mais de 100+ projetos no GitHub, vai lá conferir</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          <a href="https://github.com/sobrinhosergio" target="_blank" rel="noopener noreferrer">Ver projetos</a>
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mx-auto w-4/5">
        {visibleProjects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
            
              <p className="text-gray-600 dark:text-gray-400 ">{project.description}</p>
              <div className="grid grid-cols-2 gap-x-6 items-center ">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">Projeto</a>
                </button>
                {project.homepage && (
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">Deploy</a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {projects.length > 3 && (
        <div className="flex justify-center items-center">
          <button className="text-center rounded-lg border p-2 shadow-md flex items-center">
            <span
              className="cursor-pointer mr-2"
              onClick={() => setShowLessProjects(!showLessProjects)}
            >
              {showLessProjects ? 'Exibir mais' : 'Exibir menos'}
            </span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                showLessProjects ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={showLessProjects ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </button>
      </div>
      
        
        )}
      </div>
    </main>
  );
};

export default GitHubProjects;
