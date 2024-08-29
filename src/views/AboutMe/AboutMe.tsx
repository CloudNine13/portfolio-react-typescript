import { Header } from 'components';
import { SectionContainer } from './AboutMe.style';
import { Presentation, Skills } from './views';

const AboutMe = () => {
  return (
    <SectionContainer>
      <Header />
      <Presentation />
      <Skills />
    </SectionContainer>
  );
};

export { AboutMe };
