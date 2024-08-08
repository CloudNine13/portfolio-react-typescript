import { PATHS } from 'utils/constants';
import { LogoContainer, Logo, Link, Wrapper, LinkContainer, Empty, Button } from './Menu.style';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const links = [
    {
      path: PATHS.ABOUT_ME,
      title: '¿Quién soy?',
      target: '_self',
    },
    {
      path: PATHS.EXAMPLES,
      title: 'Ejemplos',
      target: '_self',
    },
    {
      path: PATHS.REPOSITORIES,
      title: 'Repositorios',
      target: '_self',
    },
    {
      path: PATHS.CONTACT_ME,
      title: 'Saludar',
      target: '_self',
      isButton: true,
    },
  ];

  return (
    <Wrapper>
      <LogoContainer>
        <Logo onClick={() => navigate(PATHS.HOME)} />
      </LogoContainer>
      <LinkContainer>
        {links.map(link => {
          const { path, title, target, isButton } = link;
          return isButton ? (
            <Button key={path} to={path} title={title} target={target}>
              {title}
            </Button>
          ) : (
            <Link key={path} to={path} title={title} target={target}>
              {title}
            </Link>
          ); 
        })}
      </LinkContainer>
      <Empty />
    </Wrapper>
  );
};

export { Menu };
