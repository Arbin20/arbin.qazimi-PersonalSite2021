import React, { useContext } from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagramSquare,
} from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import { Container, SectionTitle, SocialIcons } from './styles';

const Contact: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <div id="contact">
      <Container>
        <SectionTitle>
          <h1>Social Media </h1>
        </SectionTitle>

        <h2>arbin.qazimi@outlook.com</h2>
        <SocialIcons>
          <ul>
            <a
              href="https://github.com/Arbin20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaGithub color={colors.secundary} size={32} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/arbin-qazimi-mk98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaLinkedinIn color={colors.secundary} size={32} />
              </li>
            </a>
            <a
              href="https://www.instagram.com/arbin.qazimi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaInstagramSquare color={colors.secundary} size={32} />
              </li>
            </a>
            </ul>
        </SocialIcons>
      </Container>
    </div>
  );
};

export default Contact;
