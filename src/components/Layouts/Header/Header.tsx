import { PATHS } from 'utils';
import { LogoContainer, Logo, Link, Wrapper, LinkContainer, StyledButton } from './Header.style';
import { useNavigate } from 'react-router-dom';
import { links } from './utils';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LogoContainer>
        <Logo onClick={() => navigate(PATHS.HOME)} />
      </LogoContainer>
      <LinkContainer>
        {links.map(link => {
          const { id, path, type, title, isButton } = link;
          return isButton ? (
            <StyledButton
              key={id}
              title={title}
              onClick={() => {
                const scrollPath = document.getElementById(path);
                scrollPath?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ) : (
            <Link
              key={id}
              onClick={() => {
                const scrollPath = document.getElementById(path);
                scrollPath?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {title}
            </Link>
          );
        })}
      </LinkContainer>
    </Wrapper>
  );
};

export { Header };
