import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer '>
      <div className='info'>
        <h1>Jeyvers</h1>

        <p>
          API consumed :
          <a href=' https://fakestoreapi.com/ '> Fake Store API</a>
        </p>
        <p>
          Jeyi's portfolio :
          <a href='https://jeyversportfolio.netlify.app/'> Jeyi Adole </a>
        </p>
      </div>
      <div className='social-media'>
        <a
          href='https://linkedin.com/in/jeyi-adole-1301401b9'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://twitter.com/the_erthnite?s=09'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
        <a
          href='https://www.github.com/jeyvers'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
      <span>
        UI designed and developed by Jeyvers. Web Application built with React
        solely for pratice and showcase purposes.
      </span>
    </footer>
  );
};

export default Footer;
