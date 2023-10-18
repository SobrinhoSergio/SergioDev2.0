import React, { useState, useEffect } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Github from './pages/Github';
import Footer from './pages/Footer';
import Musica from './pages/Music';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Parallax from './pages/Parallax';
import Timeline from './pages/Timeline';
import GitHubProjects from './pages/GitHubProjects';

const App = () => {
  // Inicialize o estado do modo escuro com o valor armazenado no localStorage ou falso se não existir.
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Função para alternar o modo escuro.
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Armazene o novo valor no localStorage.
    localStorage.setItem('darkMode', newDarkMode);
  };

  // Use useEffect para alternar o tema inicial com base no localStorage.
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (storedDarkMode !== darkMode) {
      setDarkMode(storedDarkMode);
    }
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Musica darkMode={darkMode} />
      <Timeline />
      <About darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Github darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Parallax />
      {/*<GitHubProjects darkMode={darkMode} />*/}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
