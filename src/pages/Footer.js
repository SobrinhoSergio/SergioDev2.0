import React from 'react';
import Social  from '../components/Social';
import Container  from '../components/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = ({ darkMode }) => {
  return (
    <footer id="contact" className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      <Container>
        <div className="mx-auto flex justify-center">
          <Social/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
