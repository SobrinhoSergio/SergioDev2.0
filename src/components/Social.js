import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const socialLinks = [
  {
    icon: FaFacebook,
    color: 'blue-500',
    link: 'link_do_facebook',
  },
  {
    icon: FaTwitter,
    color: 'blue-400',
    link: 'link_do_twitter',
  },
  {
    icon: FaInstagram,
    color: 'pink-500',
    link: 'link_do_instagram',
  },
  {
    icon: FaLinkedin,
    color: 'blue-800',
    link: 'link_do_linkedin',
  },
  {
    icon: FaGithub, // Ícone do GitHub
    color: 'gray-800', // Cor do GitHub (pode ser ajustada)
    link: 'link_do_github', // Substitua 'link_do_github' pelo link real do GitHub
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
