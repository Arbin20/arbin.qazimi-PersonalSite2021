import React from 'react';

import { SectionTitle, Container, CardContainer, BottomDots } from './styles';

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <SectionTitle>
        <h1>Interested Skills</h1>
        <h3>
          I'am a perosn who want to learn everything about Technology, for that I'am trying to learn some programming languages, Bash Linux, Networking etc.
        </h3>
      </SectionTitle>
      <Container>
        <CardContainer>
          <h1>PHP</h1>
          <p>
            PHP is one of my favorite programming language, I'm not very good as a back-end developer but PHP really helps me to much! Also I've done the capsonte and some others projects using this programming language.
             </p>
        </CardContainer>

        <CardContainer>
          <h1>ReactJS</h1>
          <p>
            I have a passion for React since i was started developing with the
            framework. With a background in angular it was better to understand
            React faster
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Javascript</h1>
          <p>
            The power of this language motivate me a lot! First, because I
            prefer frontend development and the framework that i likely to use
            is React, based on JS like others (Angular and Vuew, p.e). And even,
            we can do backend with JS, using NodeJS
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Computer Networking</h1>
          <p>
            Networking is one of my favorite on IT field for that I've followed some cisco courses about Wifi Routers and Lan connections. Also a course with cisco packet software 
            where you can design the network structure.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>HTML &amp; CSS</h1>
          <p>
            No question with that. Frontend needs HTML and CSS and I&apos;m
            always looking to improve my skills in this two areas.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Styled-Components</h1>
          <p>
            When I started learning React, I started learning styled components
            to. I only see advantages using it.
          </p>
        </CardContainer>
        <CardContainer>
          <h1>GIT</h1>
          <p>
            In all my personal projects I like to use Git. I started using in
            command line but know, the extension for VS Code is so good that I
            haven&apos;t used the command line. Version control of all projects
            is much easier with the use of this tool &#128076;. Not to mention
            that all of my work can be demenstrated on GitHub, making
            Readme&apos;s to demonstrated the projects.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Software Support</h1>
          <p>
            Since I was a child I've loved to use every operating system and to try every software that can be installed on that OS either for Hacking :D.Hacking 
 Also helping others is my favorite part, For that, I've joined some websites as a volunteer without fee just to help others and to take more experience.
          </p>
        </CardContainer>
        <CardContainer>
          <h1>Team Work</h1>
          <p>
            Since I was a child I like team work. With the participation in an
            association, this aspect was always growing within me. When I
            entered the worl of work, I only saw good things and when we create
            a good relationship and when we help each other, regardless of the
            area of work (backend/frontend, p.e.), to take the project on the
            right path.
          </p>
        </CardContainer>
      </Container>
      <BottomDots>
        <h1>...</h1>
      </BottomDots>
    </div>
  );
};

export default Skills;
