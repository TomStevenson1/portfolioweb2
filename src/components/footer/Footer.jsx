import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  // Manually set the last updated date here
  const lastUpdated = 'July 19, 2025';

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Tom Stevenson</h1>
        <div className="footer__social">
          <a href="https://github.com/TomStevenson1" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/tomstevenson2/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy">
          Design inspired by Cryptical Coder
          <br />
          Last updated: {lastUpdated}
        </span>

      </div>
    </footer>
  );
}

export default Footer;
