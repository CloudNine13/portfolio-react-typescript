import { useState } from 'react';
import {
  ButtonContainer,
  DescriptionContainer,
  GreetingsContainer,
  High,
  HighItalic,
  Spoiler,
  Wrapper,
} from './Greetings.style';
import { PRESENTATION_CONSTANTS } from '../../utils';
import { Button } from 'components';
import CV from 'assets/pdf/IgorCV.pdf';

const hiddenText = {
  backIsHidden: true,
  mobileIsHidden: true,
  gameDevIsHidden: true,
};

type GreetingsProps = {
  isInView: boolean;
};
const Greetings = ({ isInView }: GreetingsProps) => {
  const [isHidden, setIsHidden] = useState(hiddenText);

  const reveal = (key: keyof typeof hiddenText) => {
    setTimeout(() => {
      setIsHidden(prev => ({ ...prev, [key]: true }));
    }, PRESENTATION_CONSTANTS.SPOILER_DELAY);
    setIsHidden(prev => ({ ...prev, [key]: false }));
  };

  const scrollIntoProjects = () => {
    const projects = document.getElementById('projects');
    projects?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollIntoContact = () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ block: 'start' });
  };

  return (
    <Wrapper $isInView={isInView}>
      <GreetingsContainer>
        <High>Igor Dzichkovskii</High>
      </GreetingsContainer>
      <DescriptionContainer>
        Soy <HighItalic>desarrollador software </HighItalic> con{' '}
        <HighItalic>más de 3 años de experiencia</HighItalic> en desarrollo Front-End.{' '}
        <Spoiler onMouseOver={() => reveal('backIsHidden')} $isHidden={isHidden.backIsHidden}>
          Y Back-End.
        </Spoiler>{' '}
        <Spoiler onMouseOver={() => reveal('mobileIsHidden')} $isHidden={isHidden.mobileIsHidden}>
          Y en desarollo Android/iOS.
        </Spoiler>{' '}
        <Spoiler onMouseOver={() => reveal('gameDevIsHidden')} $isHidden={isHidden.gameDevIsHidden}>
          Y con nociones de GameDev.
        </Spoiler>
      </DescriptionContainer>
      <ButtonContainer>
        <a href={CV} download="CV" target="_self">
          <Button title="Conóceme" onClick={scrollIntoContact} />
        </a>
        <Button title="Proyectos" primary={false} onClick={scrollIntoProjects} />
      </ButtonContainer>
    </Wrapper>
  );
};

export { Greetings };
