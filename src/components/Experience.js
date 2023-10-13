import React from 'react';
import Accordion from './Accordion';

const experiences = [
  {
    title: 'Estagiário FullStack - FriWeb',
    description: (
      <ul>
        <li>wbcwbcibe</li>
        <li>wbcwbcibe</li>
        <li>wbcwbcibe</li>
        <li>wbcwbcibe</li>

      </ul>
    ),
  },
  {
    title: 'Estagiário FullStack - A4PM',
    description: 'Developed RESTful APIs and integrated them with various frontend applications.',
  },
  {
    title: 'Developer FullStack - CEFET-NF',
    description: 'Developed RESTful APIs and integrated them with various frontend applications.',
  },
  {
    title: 'Developer FullStack - Digienge',
    description: 'Developed RESTful APIs and integrated them with various frontend applications.',
  }
  // Add more experiences here
];

const App = ({ darkMode }) => {
  return (
    <div className={`p-4  ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <h1 className="text-2xl font-bold mb-4 text-center mb-12">Experiências Developer Software</h1>
      <Accordion experiences={experiences} darkMode={darkMode} />
    </div>
  );
};

export default App;
