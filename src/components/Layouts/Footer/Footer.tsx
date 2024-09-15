import { CopyrightContainer, Wrapper, LinkContainer, Image, GithubLink } from './Footer.style';
import { mediaLinks } from './utils';
import { GITHUB } from './utils';

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightContainer>
        © 2024 Igor Dzichkovskii. Todos los derechos reservados. El código fuente está disponible en{' '}
        <GithubLink href={GITHUB} target="_blank" rel="noreferrer">
          GitHub.
        </GithubLink>
      </CopyrightContainer>
      <LinkContainer>
        {mediaLinks.map(link => (
          <Image
            src={link.src}
            key={link.id}
            onClick={() => {
              window.open(link.url, '_blank', 'noreferrer');
            }}
          />
        ))}
      </LinkContainer>
    </Wrapper>
  );
};

export { Footer };
