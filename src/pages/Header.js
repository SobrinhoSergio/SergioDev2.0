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

const MenuItem = ({ item, onClick, selected, index }) => (
  <li
    className={`hover:bg-blue-500 hover:text-white px-4 py-2 rounded ${selected ? 'bg-blue-500 text-white' : ''}`}
  >
    <a href={item.link} onClick={(e) => onClick(e, item.link, index)}>
      {item.text}
    </a>
  </li>
);

const scrollToElement = (element, duration) => {
  const target = document.querySelector(element);
  const startPosition = window.pageYOffset;
  const targetPosition = target.offsetTop;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();
  const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const animateScroll = currentTime => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    window.scrollTo(0, startPosition + distance * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const MobileMenu = ({ menuItems, onClick, darkMode, toggleDarkMode, isMenuOpen, toggleMenu, closeMenu, selectedMenuItem, setSelectedMenuItem }) => (
  <div
    className={`fixed top-0 right-0 left-0 h-full z-20 md:hidden ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}
    style={{ height: '100vh' }}
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <ul className="flex flex-col items-center space-y-4 mt-16">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              onClick={onClick}
              selected={selectedMenuItem === index}
              index={index}
            />
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
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleSmoothScroll = (event, targetId, index) => {
    event.preventDefault();
    scrollToElement(targetId, 1000);
    closeMenu();
    setSelectedMenuItem(index);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-5">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  onClick={handleSmoothScroll}
                  selected={selectedMenuItem === index}
                  index={index}
                />
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
            closeMenu={closeMenu}
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
