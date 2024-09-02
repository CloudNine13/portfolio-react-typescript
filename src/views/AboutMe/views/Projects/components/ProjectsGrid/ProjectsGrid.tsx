import { Project } from './components';
import { useGenerateRandomNums } from './hooks';
import { ProjectsContainer } from './ProjectsGrid.style';
import { projectsList, titleStarterGenerator } from './utils';

const ProjectsGrid = () => {
  const randomNums = useGenerateRandomNums(projectsList.length);
  return (
    <ProjectsContainer>
      {projectsList.map(project => (
        <Project
          titleStarter={titleStarterGenerator(randomNums, project.id)}
          key={project.id}
          {...project}
        />
      ))}
    </ProjectsContainer>
  );
};

export { ProjectsGrid };
