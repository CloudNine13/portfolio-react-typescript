import { Technology } from './components';
import {
  Wrapper,
  ImageContainer,
  Image,
  TitleContainer,
  DateContainer,
  DateImg,
  InfoWrapper,
  TechnologiesContainer,
  StyledButton,
} from './Project.style';
import dateImg from 'assets/svg/date.svg';

type ProjectProps = {
  titleStarter: string;
  title: string;
  date: string;
  image: string;
  url: string;
  technologies: Array<string>;
};

const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noreferrer');
};

const Project = ({ titleStarter, title, date, image, url, technologies }: ProjectProps) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfoWrapper>
        <TitleContainer>{title}</TitleContainer>
        <DateContainer>
          <DateImg src={dateImg} />
          {date}
        </DateContainer>
        <TechnologiesContainer>
          {technologies.map((tech, index) => (
            <Technology key={index} tech={tech} />
          ))}
        </TechnologiesContainer>
        <StyledButton
          title={`${titleStarter} ${title.split(' ')[0]}`}
          primary={true}
          external={true}
          onClick={() => openInNewTab(url)}
        />
      </InfoWrapper>
    </Wrapper>
  );
};

export { Project };
