import React from 'react';
import Container  from '../components/Container';
import Logo  from '../components/Logo';
import Menu  from '../components/Menu';


const Header = ({ darkMode }) => {

  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo/>
          <Menu/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
