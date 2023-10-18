import React from 'react';
import { Title, Container } from '../components';
import Tecnologias from '../components/Tecnologias';

const Experience = ({ darkMode }) => {
  return (
    <main className={`py-20 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <Container>
        <Title text="Tecnologias"/>
        <Tecnologias/>
      </Container>
    </main>
  );
};


export default Experience;
