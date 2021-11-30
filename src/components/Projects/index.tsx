import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import {
  Container,
  TitleSection,
  ProjectContainer,
  ButtonsContainer,
  ProjectTitle,
  TechnologiesContainer,
} from './styles';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <Container>
        <TitleSection>
          <h3>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications that I&apos;ve dedicated my time
            to.
          </h3>
        </TitleSection>

        <ProjectTitle>
          <h1>School Management System</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="images/project1.png"
            alt="Project XPTO"
          />
          <div>
            <p>
              I've created this project for Capstone in University, It is a school system management and it can be used by students, teachers, and administrators.
Administrator have access to registering students, teachers, subjects, schedule, news, images, etc. Teachers have access to the results and attendance. Students have access to look at their results(grades) and news about the school.
            </p>
            <TechnologiesContainer>
              <p>PHP</p>
              <p>Javascript</p>
              <p>MySQL</p>
              {/* <p>Styled Components</p> */}
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/Arbin20/School-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Elektro System</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="images/project2.png"
            alt="Project XPTO"
          />
          <div>
            <p>
              This website is created by me for a small company that work with electricity on North Macedonia, it is a static website without database.</p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Javacript</p>
              <p>Netlify</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/Arbin20/ElektroSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              <button type="button">
                <a
                  href="https://elektro-system.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Visit
                </a>
              </button>
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Restoranti IM</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="images/project4.png"
            alt="noopener noreferrer"
          />
          <div>
            <p>
              Restoanti-IM its. I've created this dynamic webite for all Restaurants in my Region, I've registered the name of Restaurants, address, menu etc.. The clients can see the Menu, Prices and they can order online the favorite food. For more details you can downlaod the source code.
           .
            </p>
            <TechnologiesContainer>
              <p>PHP</p>
              <p>Javascript</p>
              <p>MySQL</p>
              <p>Great-Site</p>
               </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/gobarber-web-reactjs.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
               <button type="button">
                <a
                  href="http://restoranti-im.great-site.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Visit
                </a>
              </button>
         
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Restaurant POS System & Website</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="images/project5.png"
            alt="noopener noreferrer"
          />
          <div>
            <p>
              Restaurant System Management is a simple program created by C#. It can be downloaded and run on Desktop (Windows) and then you can register the menu, prices, staff. Than the staff can take order and write to the system and the payment in the end can be done by this Program. For more details you can download the source code is private on GitHub.
            </p>
            <TechnologiesContainer>
              <p>C#</p>
              <p>Microsoft Access (Database)</p>
              <p>HTML, CSS & Javascript</p>
              <p>Netlify</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/Arbin20/Restaurat_POS_System.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              <button type="button">
                <a
                  href="https://restaurantpos-system.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Visit
                </a>
              </button>
          </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Resaturant Sedra</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="images/project6.png"
            alt="Restaurant Sedra"
            />
          <div>
            <p>
              Static Website for Restaurant Sedra.
            </p>
            <TechnologiesContainer>
              <p>HTML5 & CSS3</p>
              <p>Javascript</p>
              <p>Bootstrap</p>
             </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/Arbin20/Restaurant-Sedra.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              </ButtonsContainer>
          </div>
        </ProjectContainer>
      </Container>
    </div>
  );
};

export default Projects;
