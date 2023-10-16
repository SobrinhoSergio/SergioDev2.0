import React from 'react';
import DarkModeButton from './DarkModeButton';

const menuItems = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Portfolio', link: '#portfolio' },
  { text: 'Contact', link: '#contact' },
];

const Menu = ({ darkMode, toggleDarkMode }) => {
  
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
        <ul className="flex items-center space-x-5">
            {menuItems.map((item, index) => (
                <li key={index} className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
                  <a href={item.link} onClick={(e) => handleSmoothScroll(e, item.link)}>
                      {item.text}
                  </a>
                </li>
            ))}
            <li>
              <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </li>
        </ul>
    </nav>
  );
};

export default Menu;
