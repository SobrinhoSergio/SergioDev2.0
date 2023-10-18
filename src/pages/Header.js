import React, { useState } from 'react';
import Container from '../components/Container';
import Logo from '../components/Logo';
import DarkModeButton from '../components/DarkModeButton';
import MenuIcon from '../components/MenuIcon';

const menuItems = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Portfolio', link: '#portfolio' },
  { text: 'Contact', link: '#contact' },
];

const MenuItem = ({ item, onClick }) => (
  <li className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
    <a href={item.link} onClick={(e) => onClick(e, item.link)}>
      {item.text}
    </a>
  </li>
);

const MobileMenu = ({ menuItems, onClick, darkMode, toggleDarkMode, isMenuOpen, toggleMenu, closeMenu }) => (
  <div
    className={`fixed top-0 right-0 left-0 h-full z-20 md:hidden ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}
    style={{ height: '100vh' }}
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <ul className="flex flex-col items-center space-y-4 mt-16">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} onClick={onClick} />
          ))}
          <li>
            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </li>
        </ul>
      </div>
      <div className="text-center mt-8">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  </div>
);

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-10 ${
        darkMode ? 'bg-zinc-800' : 'bg-gray-100'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-5">
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} onClick={handleSmoothScroll} />
              ))}
              <li>
                <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </li>
            </ul>
          </nav>
          <div className="md:hidden" style={{ zIndex: 999 }}>
            <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={isMenuOpen ? closeMenu : openMenu} />
          </div>
        </div>
        {isMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            onClick={handleSmoothScroll}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            isMenuOpen={isMenuOpen}
            toggleMenu={closeMenu}
            closeMenu={closeMenu} // Passando a função closeMenu para o MobileMenu
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
