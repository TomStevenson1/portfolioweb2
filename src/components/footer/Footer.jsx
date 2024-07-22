import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tom Stevenson</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/TomStevenson1" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/tomstevenson2/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                </a>
                <a href="https://leetcode.com/u/tomjon4340/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;

