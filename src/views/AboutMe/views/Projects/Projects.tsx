import { SCROLL_INTO_VIEW_IDS } from 'utils';
import { ProjectsGrid, ProjectsHeader, ProjectsFooter } from './components';
import { Wrapper } from './Projects.style';

const Projects = () => {
  return (
    <Wrapper id={SCROLL_INTO_VIEW_IDS.PROJECTS}>
      <ProjectsHeader />
      <ProjectsGrid />
      <ProjectsFooter />
    </Wrapper>
  );
};

export { Projects };
