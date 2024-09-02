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

  const handleClick = () => {
    const projects = document.getElementById('projects');
    projects?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper $isInView={isInView}>
      <GreetingsContainer>
        <High>Igor Dzichkovskii</High>
      </GreetingsContainer>
      <DescriptionContainer>
        Soy <HighItalic>desarrollador software </HighItalic> con{' '}
        <HighItalic>más de 3 años de experiencia</HighItalic> en el desarrollo Front-End.{' '}
        <Spoiler onMouseOver={() => reveal('backIsHidden')} $isHidden={isHidden.backIsHidden}>
          Y Back-End.
        </Spoiler>{' '}
        <Spoiler onMouseOver={() => reveal('mobileIsHidden')} $isHidden={isHidden.mobileIsHidden}>
          Y el desarrollo Android/iOS.
        </Spoiler>{' '}
        <Spoiler onMouseOver={() => reveal('gameDevIsHidden')} $isHidden={isHidden.gameDevIsHidden}>
          Y el GameDev he probado también.
        </Spoiler>
      </DescriptionContainer>
      <ButtonContainer>
        <Button title="Conóceme" />
        <Button title="Proyectos" primary={false} onClick={handleClick} />
      </ButtonContainer>
    </Wrapper>
  );
};

export { Greetings };
