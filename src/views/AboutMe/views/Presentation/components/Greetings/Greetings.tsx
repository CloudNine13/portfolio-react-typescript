import { useState } from 'react';
import {
  ButtonContainer,
  DescriptionContainer,
  GreetingsContainer,
  HighlightedText,
  HighlightedTextItalic,
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

  return (
    <Wrapper $isInView={isInView}>
      <GreetingsContainer>
        <HighlightedText>Igor Dzichkovskii</HighlightedText>
      </GreetingsContainer>
      <DescriptionContainer>
        Soy <HighlightedTextItalic>desarrollador software </HighlightedTextItalic> con{' '}
        <HighlightedTextItalic>más de 3 años de experiencia</HighlightedTextItalic> en el desarrollo
        Front-End.{' '}
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
        <Button title="Proyectos" primary={false} />
      </ButtonContainer>
    </Wrapper>
  );
};

export { Greetings };
