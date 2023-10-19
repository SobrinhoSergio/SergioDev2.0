import React from 'react';
import Social from '../components/Social';
import Container from '../components/Container';
import Logo from '../components/Logo';
import { IconName } from "react-icons/bs";

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0; // Scroll até o topo da página
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duração da animação em milissegundos
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
        className="bg-indigo-500 text-3xl rounded-full w-20 h-20 mt-4 absolute right-10 bottom-20 animate-float"
      >
        🚀
      </button>
      <div className="bg-indigo-500 text-center py-6 text-xl font-semibold italic">
        <h2>Desenvolvido por Sérgio Sobrinho Dev. FullStack</h2>
      </div>
    </footer>
  );
};

export default Footer;
