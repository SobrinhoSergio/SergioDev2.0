import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const socialLinks = [
  {
    icon: FaFacebook,
    color: 'blue-500',
    link: 'https://www.facebook.com/sergio.sobrinho.9638',
  },
  {
    icon: FaTwitter,
    color: 'blue-400',
    link: 'link_do_twitter',
  },
  {
    icon: FaInstagram,
    color: 'pink-500',
    link: 'https://www.instagram.com/sergio.sob7/',
  },
  {
    icon: FaLinkedin,
    color: 'blue-800',
    link: 'https://www.linkedin.com/in/sobrinhosergio/',
  },
  {
    icon: FaGithub,
    color: 'gray-800',
    link: 'https://github.com/SobrinhoSergio', 
  },
];

const Social = ({ darkMode }) => {
  return (
    <div className="flex space-x-8 py-10">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.createElement(social.icon, {
            className: `text-gray-600 hover:text-${social.color}`,
            size: 30,
          })}
        </a>
      ))}
    </div>
  );
};

export default Social;
