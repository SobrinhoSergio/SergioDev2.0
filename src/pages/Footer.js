import React from 'react';
import Social  from '../components/Social';
import Container  from '../components/Container';
import Logo  from '../components/Logo';

const Footer = ({ darkMode }) => {
  return (
    <footer id="contact" className={`c ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      <Container>
        <div className="mx-auto flex flex-col justify-center items-center">
          <Logo/>
          <Social/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
