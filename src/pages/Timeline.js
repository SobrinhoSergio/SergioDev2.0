import React from 'react';

const Timeline = ({darkMode}) => {
  return (
    <main className="bg-indigo-700 p-4">
      <h2 className="text-3xl text-white font-bold mb-12">Cronologia</h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {/* Event 1 */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl">Faculdade Federal 🎓</h3>
            <p className="mt-2 leading-6">Aprovado nos cursos mais renomados do país - Sistemas de Informações no CEFET-RJ. Nota 5 MÁXIMA no Enade e MEC.</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2019 - Atualmente</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl">Estágio FullStack 💻</h3>
            <p className="mt-2 leading-6">Aprovado em meu Primeiro Estágio, bem no início da faculdade. Onde tive um grande aproveitamento, aprendi as principais tecnologias do mercado de Programação.</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2021-2022</span>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl">2° Estágio FullStack 💻</h3>
            <p className="mt-2 leading-6">Meu Segundo Estágio, onde trabalhei principalmente com VueJS + NodeJS + GitLab + Scrum + Figma + Laravel. Onde tive contato com as tecnologias que estão em alta em TI. E desenvolvi minhas principais competências.</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2022</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl">Desenvolvedor FullStack 💼</h3>
            <p className="mt-2 leading-6">Promovido a Desenvolvedor FullStack de uma Startup Brasileira com foco em computação e Marketing Digital. Onde fui responsável pelo Front End a desenvolver telas mais responsivas, interativas ao usuário, minimalistas e intuitivas, com as principais Linguagens e Framework.</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2023 - Atualmente</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
