import React from 'react';

const Container = ({children}) => {
  return(
    <section className="container mx-auto px-6 py-4">{children}</section>
  );
};

export default Container;
