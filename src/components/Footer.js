import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importe os ícones das redes sociais

const Footer = ({ darkMode }) => {
  return (
    <footer className={`bg-${darkMode ? 'gray-900' : 'gray-100'} py-6`}>
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-4">
          <a href="link_do_facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={`text-${darkMode ? 'white' : 'gray-600'} hover:text-blue-500`} size={24} />
          </a>
          <a href="link_do_twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={`text-${darkMode ? 'white' : 'gray-600'} hover:text-blue-400`} size={24} />
          </a>
          <a href="link_do_instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`text-${darkMode ? 'white' : 'gray-600'} hover:text-pink-500`} size={24} />
          </a>
          <a href="link_do_linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`text-${darkMode ? 'white' : 'gray-600'} hover:text-blue-800`} size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
