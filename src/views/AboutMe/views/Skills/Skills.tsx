import { Skill } from './components';
import { Header, SkillsContainer, Wrapper } from './Skills.style';
import { SKILLS, SOFT_SKILLS } from './utils';

const Skills = () => {
  return (
    <Wrapper>
      <Header>Skills</Header>
      <SkillsContainer>
        {SKILLS.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SkillsContainer>
      <Header>Soft Skills</Header>
      <SkillsContainer>
        {SOFT_SKILLS.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SkillsContainer>
    </Wrapper>
  );
};

export { Skills };
