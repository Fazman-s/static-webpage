import React from 'react';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Fazman-s">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/fazman-s-587ab8240">
          <FaLinkedin />
        </a>

      </div>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;