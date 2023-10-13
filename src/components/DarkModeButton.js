import React from 'react';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`px-3 py-1 rounded-lg focus:outline-none flex items-center ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'}`}
    >
      {darkMode ?  '☀️' : '🌙'} 
      <span>{darkMode}</span>
    </button>
  );
};

export default DarkModeButton;

