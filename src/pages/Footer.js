import React from 'react';
import Social from '../components/Social';
import Container from '../components/Container';
import Logo from '../components/Logo';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className={`relative ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      <Container>
        <div className="mx-auto flex flex-col justify-center items-center">
          <Logo />
          <Social />
        </div>
      </Container>
      <button
        onClick={scrollToTop}
        className="bg-indigo-500 text-white rounded-full w-10 h-10 mt-4 absolute right-10 bottom-10"
      >
        🚀
      </button>

    </footer>
  );
};

export default Footer;
