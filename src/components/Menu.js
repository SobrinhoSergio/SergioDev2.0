import React from 'react';
import DarkModeButton from './DarkModeButton';

const menuItems = [
  { text: 'Home', link: '#' },
  { text: 'About', link: '#' },
  { text: 'Portfolio', link: '#' },
  { text: 'Contact', link: '#' },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <section className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-4xl italic">Dev. <span className="text-blue-500">Full Stack</span></h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-5">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
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
