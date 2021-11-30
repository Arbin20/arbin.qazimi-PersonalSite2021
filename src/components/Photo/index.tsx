import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Container, PersonalInfo } from './styles';

import { useUserName } from '../../hooks/userName';

const Photo: React.FC = () => {
  const { name } = useUserName();
  return (
    <div id="profile">
      <Container>
        <PersonalInfo>
          <h5>Hi {name},</h5>
          <h4>I'am</h4>
          <h1>Arbin Qazimi</h1>
          <h5>
            <ReactTypingEffect
              speed={100}
              typingDelay={1000}
              eraseDelay={1000}
              text={[
                'Web Developer',
                'Network Administrator',
                'IT Support',
              ]}
            />
          </h5>
        </PersonalInfo>
      </Container>
    </div>
  );
};

export default Photo;
