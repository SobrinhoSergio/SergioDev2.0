import React from 'react';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`px-3 py-1 rounded-lg focus:outline-none flex items-center ${darkMode ? 'bg-yellow-400 text-white' : 'bg-gray-800 text-white'}`}
    >
      {darkMode ?  '☀️' : '🌙'} 
      <span className="ml-2">{darkMode}</span>
    </button>
  );
};

export default DarkModeButton;

