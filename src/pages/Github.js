import React from 'react';
import Accordion from '../components/Accordion';
import { Title, Container } from '../components';


const About = () => {
  return (
    <main id="about" className={`py-20 bg-indigo-700 text-white`}>
      <Container>
        <div className="mx-auto flex flex-col justify-center items-center">
            <Title text="Meu GitHub" />
            <p className="text-2xl pb-10">Já desenvolvi Mais + de <span className="text-indigo-800">100 projetos</span> em meu GitHub, venha conferir!</p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded w-60 my-2 text-2xl">
                <a href="https://github.com/sobrinhosergio" target="_blank" rel="noopener noreferrer">
                Projetos
                </a>
            </button>
        </div>
      </Container>
    </main>
  );
};

export default About;
