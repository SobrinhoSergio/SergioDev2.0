import React, { useState, useEffect } from 'react';
import myImage from '../images/eu.jpg';

const Main = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [content, setContent] = useState([
    'Sérgio Sobrinho',
    'Dev Front-End',
    'Dev Back End',
    'Filho de Deus'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <main id="home" className={`py-44 ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      
      <section className="container mx-auto px-6 flex justify-between items-center">
        
        <div className={`flex flex-col space-y-4 w-1/2`}>
          
          <h1 className="text-4xl font-bold mb-4">
            Olá sou,  <span className="text-blue-500 italic">{content[currentIndex]}</span> 
          </h1>
          
          <p>Entusiasta de tecnologia e estudante de Sistemas de Informação no CEFET-NF. Com 22 anos de idade, estou constantemente explorando diferentes áreas da programação e desenvolvimento. Minhas habilidades incluem o uso de tecnologias de programação FullStack. Além disso, conto com um vasto portifólio em diversas linguagens, sempre mantendo atualizado para tudo do mercado. </p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-40 my-2">
            <a href="https://github.com/sobrinhosergio" target="_blank" rel="noopener noreferrer">
              Meu Portfolio
            </a>
          </button>
        
        </div>
        
        <div className="w-1/2 flex justify-center items-center">
          
          <div className={`relative rounded-full overflow-hidden h-72 w-72 shadow-lg bg-cover bg-center`}>
            <img src={myImage} alt="Sua Foto" className="object-cover w-full h-full" />
          </div>
        
        </div>
      
      </section>
    
    </main>
  );
};

export default Main;
