import React from 'react';
import Accordion from './Accordion';

const experiences = [
  {
    title: 'Estagiário FullStack - FriWeb',
    description: (
      <ul>
        <li>🚀 Front-End: Criando interfaces de usuário atraentes e responsivas com HTML5, CSS3 e JavaScript, proporcionando experiências envolventes aos usuários.</li>
        <li>💼 Back-End: Desenvolvimento sólido com PHP7 e gerenciamento de dados eficiente com MySQL, garantindo que os sistemas funcionem de maneira eficaz nos bastidores.</li>
        <li>🌳 Versionamento de Código: Utilização de Git e GitHub para rastrear e colaborar em projetos, garantindo a segurança e o controle de versões.</li>
        <li>🎨 Figma: Colaboração na prototipagem e design de interfaces para garantir uma experiência do usuário de alta qualidade.</li>
      </ul>
    ),
  },
  {
    title: 'Estagiário FullStack - A4PM',
    description: (
      <ul>
        <li>✅ Frontend: Codificação de interfaces de usuário responsivas utilizando:
        Vue.js: Implementei as funcionalidades front-end, garantindo uma experiência do usuário envolvente.
        HTML5: Utilizei marcação semântica para estruturar o conteúdo da página.
        CSS3: Estilizei as interfaces de acordo com os designs detalhados fornecidos pelos Designers.</li>
        <li>⚙️ Backend: Desenvolvimento de sistemas robustos com:
        Node.js: Criei APIs REST e GraphQL, garantindo a funcionalidade e escalabilidade do backend.
        PHP Laravel: Implementei lógica de negócios, autenticação e gerenciamento de recursos.</li>
        <li>📊 Banco de Dados:
        Extração de dados com SQL, permitindo análises precisas e tomada de decisões baseadas em dados.</li>
        <li>🔄 Controle de Versão: Utilizei o GitLab para gerenciamento de código e colaboração em equipe, mantendo os repositórios atualizados.</li>
        <li>🚀 Reuniões de Planejamento: Contribuí para a definição de metas e estratégias de projeto.</li>

      </ul>
    ),
  },
  {
    title: 'Trainne Back End - Tech4me',
    description: (
      <ul>
        <li>✔️ Java e MVC: Profundo conhecimento em Java e design de aplicativos baseados em Modelo-Visão-Controlador (MVC), garantindo uma estrutura sólida e manutenível.</li>
        <li>✔️ Lógica de Programação: Ensino sólidos princípios de lógica de programação, promovendo a escrita de código limpo e eficiente.</li>
        <li>✔️ Bancos de Dados: Especializado em MongoDB, PostgreSQL e bancos de dados NoSQL, abrangendo modelagem, consulta e otimização.</li>
        <li>✔️ Microserviços e NoSQL: Experiente na implementação de arquiteturas de microserviços, bem como o uso eficiente de bancos de dados NoSQL para escalabilidade.</li>
        <li>✔️ Arquitetura de Microserviços: Especialização em Config Server, Eureka Server e Gateway, permitindo o desenvolvimento de sistemas altamente distribuídos e escaláveis.</li>

      </ul>
    ),
  },
  {
    title: 'Developer FullStack - Digienge',
    description: (
      <ul>
        <li>✅ Front-End: Desenvolvi interfaces web responsivas, intuitivas e visualmente atraentes, incorporando:

        HTML5, CSS3: Utilizei essas tecnologias para criar layouts e estilos atraentes.
        JavaScript e jQuery: Adicionei interatividade e dinamismo às páginas.
        Bootstrap: Utilizei este framework para acelerar o desenvolvimento e garantir a consistência visual.
        🚀 ReactJS: Implementei aplicativos web modernos e eficientes, aprimorando a experiência do usuário e permitindo a criação de interfaces inovadoras.</li>
        <li>⚙️ Back-End: Utilizei PHP seguindo o padrão de projeto MVC para criar sistemas robustos e escaláveis.</li>
        <li>📱 Design Responsivo: Garanti que todas as interfaces fossem adaptáveis a diferentes dispositivos e tamanhos de tela.
        </li>
        <li>🔄 Controle de Versão e Colaboração:

        Git e GitHub: Utilizei ferramentas de controle de versão para colaboração eficaz e gerenciamento de código-fonte</li>
        <li>🔗 Integração de API: Implementei integrações de API para aprimorar a funcionalidade dos aplicativos.</li>

      </ul>
    ),
  },
  // Add more experiences here
];

const Experience = ({ darkMode }) => {
  return (
    <main className={`py-20 ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
      <section className="container mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-center mb-20">Experiências Developer Software</h1>
        <Accordion experiences={experiences} darkMode={darkMode} />
      </section>
    </main>
  );
};

export default Experience;
