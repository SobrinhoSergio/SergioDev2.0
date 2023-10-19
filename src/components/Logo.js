import React from 'react';

const Logo = () => {
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
    <div onClick={scrollToTop} className="cursor-pointer">
       <h1 className="text-4xl italic">
         Dev. <span className="text-blue-500">Full Stack </span>
       </h1>
    </div>
  );
};

export default Logo;
