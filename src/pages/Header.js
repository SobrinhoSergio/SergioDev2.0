import React from 'react';
import Container  from '../components/Container';
import Logo  from '../components/Logo';
import DarkModeButton from '../components/DarkModeButton';

const menuItems = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Portfolio', link: '#portfolio' },
  { text: 'Contact', link: '#contact' },
];


const Header = ({ darkMode, toggleDarkMode }) => {

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo/>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
