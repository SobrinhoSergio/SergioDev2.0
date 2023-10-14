import React from 'react';

const technologies = [
  {
    name: 'React',
    image: require('../images/react.png'),
    alt: 'React',
  },
  {
    name: 'Figma',
    image: require('../images/figma.png'),
    alt: 'Figma',
  },
  {
    name: 'JavaScript',
    image: require('../images/js.png'),
    alt: 'JavaScript',
  },
  {
    name: 'TypeScript',
    image: require('../images/ts.png'),
    alt: 'TypeScript',
  },
  {
    name: 'MongoDB',
    image: require('../images/mongo.png'),
    alt: 'MongoDB',
  },
  {
    name: 'PHP',
    image: require('../images/php.png'),
    alt: 'PHP',
  },
  {
    name: 'Node.js',
    image: require('../images/node.png'),
    alt: 'Node.js',
  },
  {
    name: 'Tailwind CSS',
    image: require('../images/tailwind.png'),
    alt: 'Tailwind CSS',
  },
  {
    name: 'SASS',
    image: require('../images/sass.png'),
    alt: 'SASS',
  },
  {
    name: 'Vue.js',
    image: require('../images/vue.png'),
    alt: 'Vue.js',
  },
  {
    name: 'Angular',
    image: require('../images/angular.png'),
    alt: 'Angular',
  },
  {
    name: 'Git',
    image: require('../images/git.png'),
    alt: 'Git',
  },
  {
    name: 'Banco de Dados',
    image: require('../images/bd.png'),
    alt: 'Banco de Dados',
  },
];

const Tecnologias = ({ darkMode }) => {
  return (
    <main className={`py-20 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <section className="container mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-center mb-20">Tecnologias</h1>
        <div className="grid grid-cols-4 gap-10">
          {technologies.map((tech, index) => (
            <div className="flex justify-center items-center" key={index}>
              <img src={tech.image} alt={tech.alt} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};


export default Tecnologias;
