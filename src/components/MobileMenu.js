// MobileMenu.js
import React from 'react';
import MenuItem from './MenuItem';
import DarkModeButton from './DarkModeButton';
import MenuIcon from './MenuIcon';

const MobileMenu = ({ menuItems, onClick, darkMode, toggleDarkMode, isMenuOpen, toggleMenu }) => (
  <div className={`md:hidden absolute top-0 right-0 left-0 bg-white text-black`}>
    <ul className="flex flex-col items-center space-y-4 mt-16">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} onClick={onClick} />
      ))}
      <li>
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </li>
    </ul>
    <div className="text-center mt-8">
      <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  </div>
);

export default MobileMenu;
