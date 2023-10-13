import React, { useState } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Tecnologias from './components/Tecnologias';
import Footer from './components/Footer';
import Musica from './components/Musica';
import Experience from './components/Experience';
import Stack from './components/Stack';
import GitHubProjects from './components/GitHubProjects';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-zinc-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Stack darkMode={darkMode} />
      <Musica darkMode={darkMode} />
      <Tecnologias darkMode={darkMode} />
        {/*<GitHubProjects darkMode={darkMode} />*/}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
