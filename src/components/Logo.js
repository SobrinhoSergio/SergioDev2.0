import React from 'react';

const Logo = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (  
    <div onClick={scrollToTop}>
       <h1 className="text-4xl italic cursor-pointer">Dev. <span className="text-blue-500">Full Stack</span></h1>
    </div>
  );
};

export default Logo;
