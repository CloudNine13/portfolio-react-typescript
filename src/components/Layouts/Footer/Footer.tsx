import { CopyrightContainer, Wrapper, LinkContainer, Image } from './Footer.style';
import { mediaLinks } from './utils';

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightContainer>
        © 2024 Igor Dzichkovskii. Todos los derechos reservados.
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
