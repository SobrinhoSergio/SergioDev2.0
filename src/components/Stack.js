import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const StacksSection = ({ darkMode }) => {
  const [likedProjects, setLikedProjects] = useState([]);

  const toggleLike = (projectId) => {
    if (likedProjects.includes(projectId)) {
      setLikedProjects(likedProjects.filter((id) => id !== projectId));
    } else {
      setLikedProjects([...likedProjects, projectId]);
    }
  };

  const StackCard = ({ title, description, liked }) => {
    return (
      <main className="bg-gray-800 text-gray-200 rounded-lg   ">
        <div className="px-4 py-6 ">
          <h3 className="text-2xl font-semibold flex justify-between items-center mb-2">
            {title}
            <button onClick={() => toggleLike(title)} className="btn btn--like">
            {liked ? <AiFillHeart className="text-pink-500 text-2xl" /> : <AiOutlineHeart className="text-2xl" />}
          </button>  
          </h3>
          <p className="">{description}</p>
        </div>
       
      </main>
    );
  };

  return (
    <div className={`flex justify-center space-x-6 p-8 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <StackCard
        title="Front-End"
        description="Desenvolvimento de interfaces web usando HTML, CSS e JavaScript, com foco especial no framework React. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
        liked={likedProjects.includes('Front-End')}
      />
      <StackCard
        title="Back-End"
        description="Criação de servidores e APIs usando Node.js e Express, além de integração com bancos de dados MongoDB. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
        liked={likedProjects.includes('Back-End')}
      />
      <StackCard
        title="Mobile"
        description="Desenvolvimento de aplicativos móveis utilizando React Native e a plataforma Expo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
        liked={likedProjects.includes('Mobile')}
      />
    </div>
  );
};

export default StacksSection;
