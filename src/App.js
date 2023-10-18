import React, { useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Atualize o estado com base no valor anterior.
  };
  return (
    <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Musica darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Timeline />
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
