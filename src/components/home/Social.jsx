import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/TomStevenson1" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/tomstevenson2/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
            </a>
            <a href="https://leetcode.com/u/tomjon4340/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
            </a>
        </div> 
    ); 
}

export default Social;
