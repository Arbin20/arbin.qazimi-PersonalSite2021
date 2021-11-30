import React from 'react';

import { FaGithub } from 'react-icons/fa';
import {
  Container,
  AboutInfo,
  Timeline,
  SectionTitle,
  TimelineContent,
} from './styles';

const About: React.FC = () => {
  return (
    <div id="about">
      <Container>
        <SectionTitle>
          <h2>About me</h2> 
        </SectionTitle>

        <AboutInfo>
          <p>
            Hey there! I&apos;m a Frontend Web Developer & Network Administrator
          </p>

          <p>
            Bio: <br />
            Name: Arbin <br />
            Surname: Qazimi <br />
            Birthday: 07/11/1998 <br />
            Nationality: Albanian <br />
            Country: North Macedonia
          </p>
<br />
          <p>
           Education: <br />

High School: Gymnasium 7 March, Tetovo <br />
University: South East European University, Tetovo (Computer Sciences)
           </p>

        
         
        </AboutInfo>
        <Timeline>
          <ul>
            <li>
              <TimelineContent>
                <h3>Gymnasium "7 March"</h3>
                <p>
                  IT Support & Network Administrator
                </p>
               </TimelineContent>
              <div className="time">
                <h4>2015 - 2017 </h4>

              </div>
            </li>
            <li>
              <TimelineContent>
                <h3>Humanity Organization "Pishtari"</h3>
                <p>Junior Frontend Developer: HTML5 & CSS3 + Bootstrap + Javascript</p>
                <p>IT Support</p>
               </TimelineContent>
              <div className="time">
                <h4>2017 - 2018</h4>
              </div>
            </li>


            <li>
              <TimelineContent>
                <h3>Restaurant Sedra</h3>
                <p>
                  Junior .NET Developer: C# + Javascript + MySQL
                </p>
                <p>
                 Frontend Developer: ReactJS
                 </p>
                <p>
                 Network Administrator: Wifi + Lan Configurations
                </p>
              </TimelineContent>
              <div className="time">
                <h4>2018 - 2021</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Frontend Developer & Junior Software Support Engineer (Remote)</h3>
                </TimelineContent>
              
              <div className="time">
                <h4>2021 - present</h4>
              </div>
            </li>
          </ul>
        </Timeline>
      </Container>
    </div>
  );
};

export default About;
