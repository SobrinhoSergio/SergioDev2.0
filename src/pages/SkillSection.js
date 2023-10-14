import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const SkillSection = ({ title, description, likedProjects, toggleLike, darkMode }) => {
  return (
    <section className={`rounded-lg border border-blue-500 px-4 py-6 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <h3 className="text-2xl font-semibold flex justify-between items-center mb-4">
        {title}
        <button onClick={() => toggleLike(title)} className="btn btn--like">
          {likedProjects.includes(title) ? <AiFillHeart className="text-pink-500 text-2xl" /> : <AiOutlineHeart className="text-2xl" />}
        </button>
      </h3>
      <p>{description}</p>
    </section>
  );
};

export default SkillSection;
