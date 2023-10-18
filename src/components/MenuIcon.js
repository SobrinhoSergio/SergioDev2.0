import React from 'react';

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="cursor-pointer" onClick={toggleMenu}>
      <div className={`${isMenuOpen ? 'hidden' : 'block'} md:block`}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="2" />
          <line x1="5" y1="24" x2="27" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="5" y1="8" x2="27" y2="8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="25" y2="25" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="25" x2="25" y2="7" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default MenuIcon;
