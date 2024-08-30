import { useInView } from 'framer-motion';

import { Image } from 'components';
import { Greetings } from './components';
import { GreetingsWrapper, Wrapper, ImageContainer } from './Presentation.style';
import image from 'assets/images/igor.jpg';
import { useRef } from 'react';

const Presentation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <Wrapper ref={sectionRef}>
      <ImageContainer>
        <Image src={image} isInView={isInView} />
      </ImageContainer>
      <GreetingsWrapper>
        <Greetings isInView={isInView} />
      </GreetingsWrapper>
    </Wrapper>
  );
};

export { Presentation };
