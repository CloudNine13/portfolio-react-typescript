import { Header } from 'components';
import { SectionContainer } from './AboutMe.style';
import { Presentation, Skills, Projects } from './views';

const AboutMe = () => {
  return (
    <SectionContainer>
      <Header />
      <Presentation />
      <Skills />
      <Projects />
    </SectionContainer>
  );
};

export { AboutMe };
