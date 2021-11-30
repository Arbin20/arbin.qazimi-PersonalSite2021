import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Container, SocialNetWork } from './styles';

interface RightNavProps {
  open: boolean;
  setOpen(open: boolean): void;
}

const RightNav: React.FC<RightNavProps> = ({ open, setOpen }) => {
  const handleClickHome = useCallback(() => {
    const anchor = document.querySelector('#profile');
    anchor?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  }, [open, setOpen]);
  const handleClickAbout = useCallback(() => {
    const anchor = document.querySelector('#about');
    anchor?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  }, [open, setOpen]);

  const handleClickSkills = useCallback(() => {
    const anchor = document.querySelector('#skills');
    anchor?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  }, [open, setOpen]);

  

  const handleClickProjects = useCallback(() => {
    const anchor = document.querySelector('#projects');
    anchor?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  }, [open, setOpen]);

  const handleClickContact = useCallback(() => {
    const anchor = document.querySelector('#contact');
    anchor?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  }, [open, setOpen]);
  return (
    <Container open={open}>
      <li>
        <Link to="/home" onClick={handleClickHome}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/home" onClick={handleClickProjects}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/home" onClick={handleClickAbout}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="/home" onClick={handleClickSkills}>
          Skills
        </Link>
      </li>

     
      {/* <li>
        <Link to="/home">Articles</Link>
      </li> */}
      <li>
        <Link to="/home" onClick={handleClickContact}>
          Contact
        </Link>
      </li>
      <li>
      <a
       href ="https://ufile.io/pxxqpvte"
       target="_blank"
       rel="noopener noreferrer">
       Download Resume</a>
       </li>
      <SocialNetWork>
        <li>
          <a
            href="https://github.com/Arbin20"
            target="_blank"
            rel="noopener noreferrer">
            <FiGithub size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arbin-qazimi-mk98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={20} />
          </a>
        </li>
      </SocialNetWork>
    </Container>
  );
};

export default RightNav;
