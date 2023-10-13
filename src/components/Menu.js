import React, { useState } from 'react';
import DarkModeButton from './DarkModeButton';

const Header = ({ darkMode, toggleDarkMode }) => {
 
  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <section className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="logo">
          <h1 class="text-4xl italic">Dev. <span class="text-blue-500">Full Stack</span></h1>
        </div>
        <nav>
          <ul className={`flex items-center space-x-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <li class="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            <a href="#">
              <span class="text-base">Home</span>
            </a>
          </li>
          <li class="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            <a href="#">
              <span class="text-base">About</span>
            </a>
          </li>
          <li class="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            <a href="#">
              <span class="text-base">Portfolio</span>
            </a>
          </li>
          <li class="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
            <a href="#">
              <span class="text-base">Contact</span>
            </a>
          </li>

            <li> 
              <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
