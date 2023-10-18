import React, { useState } from 'react';
import { Title, Container } from '../components';
import PodcastPlayer from '../components/PodcastPlayer';


const Music = ({ darkMode }) => {

  return (
    <main className={`py-20  ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`} >
      <Container>
        <Title text="Minha Música"/>
        <PodcastPlayer/>
        </Container>
    </main>
  );
};

export default Music;
