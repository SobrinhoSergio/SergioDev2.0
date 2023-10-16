import React, { useState } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Tecnologias from './pages/Tecnologias';
import Footer from './pages/Footer';
import Musica from './pages/Musica';
import Experience from './pages/Experience';
import Stack from './pages/StacksSection';
import GitHubProjects from './pages/GitHubProjects';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Musica darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Stack darkMode={darkMode} />
      <Tecnologias darkMode={darkMode} />
        {/*<GitHubProjects darkMode={darkMode} />*/}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
