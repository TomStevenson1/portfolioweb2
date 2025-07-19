import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={`header ${toggle ? 'show-menu' : ''}`}>
      <nav className="nav container">
        <Link to="home" className="nav__logo">
          Tom Stevenson
        </Link>
        <div className={`nav__menu ${toggle ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="home" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="about" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="skills" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="qualification" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Experiences
              </Link>
            </li>
            <li className="nav__item">
              <Link to="portfolio" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link to="recommendations" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Recommendations
              </Link>
            </li>
            <li className="nav__item">
              <Link to="contact" className="nav__link" activeClass="active-link" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
                <i className="nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i className="nav__close" onClick={handleToggle}></i>
        </div>
        <div className="nav__toggle" onClick={handleToggle}>
          <i className="nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
