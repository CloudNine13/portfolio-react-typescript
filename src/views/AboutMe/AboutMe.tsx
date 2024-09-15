import { Header, ScrollButton } from 'components';
import { SectionContainer } from './AboutMe.style';
import { Presentation, Skills, Projects, Contact } from './views';
import { Footer } from 'components/Layouts/Footer';

const AboutMe = () => {
  return (
    <SectionContainer>
      <ScrollButton />
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </SectionContainer>
  );
};

export { AboutMe };
