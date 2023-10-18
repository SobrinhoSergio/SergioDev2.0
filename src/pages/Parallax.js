import React, { useEffect, useState } from 'react';
import myImage from '../images/parallax.jpg';

const Parallax = () => {

  const parallaxStyle = {
    backgroundImage: `url(${myImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'color',
    backgroundAttachment: 'fixed',
  };

  return (
    <main
      style={parallaxStyle}
      className="py-60 flex items-center justify-center text-white text-2xl font-bold"
    >
      " Não cheguei aonde eu quero, mas estou a cada dia mais perto ".
    </main>
  );
};

export default Parallax;
