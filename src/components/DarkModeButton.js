import React from 'react';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  const moonEmoji = "🌕"; // Emoji da lua
  const sunEmoji = "☀️"; // Emoji do sol

  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        className="hidden"
        id="darkModeToggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="darkModeToggle"
        className={`block w-16 h-8 ${darkMode ? 'bg-blue-500' : 'bg-yellow-400'} rounded-full cursor-pointer`}
      >
        <div
          className={`w-8 h-8 bg-white rounded-full flex items-center justify-center absolute transition-transform duration-300 ${darkMode ? 'translate-x-full' : ''}`}
        >
          {darkMode ? moonEmoji : sunEmoji}
        </div>
      </label>
    </div>
  );
};

export default DarkModeButton;
