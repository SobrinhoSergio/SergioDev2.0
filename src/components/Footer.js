import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importe os ícones das redes sociais

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
];

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
      <section className="container mx-auto flex justify-center">
        <div className="flex space-x-4">
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
      </section>
    </footer>
  );
};

export default Footer;
