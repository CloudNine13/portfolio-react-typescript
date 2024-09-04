import { Header } from 'components';
import { SectionContainer } from './AboutMe.style';
import { Presentation, Skills, Projects } from './views';
import { Footer } from 'components/Layouts/Footer';

const AboutMe = () => {
  return (
    <SectionContainer>
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Footer/>
    </SectionContainer>
  );
};

export { AboutMe };
