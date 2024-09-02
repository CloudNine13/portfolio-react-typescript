import { Wrapper, SkillQuality, QualityContainer } from './Skill.style';
import excellentDot from 'assets/svg/dot_excellent.svg';
import goodDot from 'assets/svg/dot_good.svg';
import normalDot from 'assets/svg/dot_normal.svg';

type SkillProps = {
  name: string;
  skill?: number;
};

const getSkills = (skill: number) => {
  switch (skill) {
    case 9:
    case 8:
      return {
        src: excellentDot,
        width: '13px',
      };
    case 7:
    case 6:
    case 5:
    case 4:
      return { src: goodDot, width: '11px' };
    case 3:
    case 2:
    case 1:
    default:
      return { src: normalDot, width: '9px' };
  }
};

const Skill = ({ name, skill }: SkillProps) => {
  return (
    <Wrapper>
      {name}
      <QualityContainer>
        {skill ? [...Array(skill)].map((_, i) => <SkillQuality key={i} {...getSkills(i)} />) : null}
      </QualityContainer>
    </Wrapper>
  );
};

export { Skill };
