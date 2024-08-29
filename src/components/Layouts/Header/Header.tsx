import { PATHS } from 'utils/constants';
import { LogoContainer, Logo, Link, Wrapper, LinkContainer } from './Header.style';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';

type MenuProps = {
  menuColor?: string;
};

const Header = ({ menuColor }: MenuProps) => {
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      path: PATHS.ABOUT_ME,
      title: '¿Quién soy?',
      target: '_self',
    },
    {
      id: 2,
      path: PATHS.EXAMPLES,
      title: 'Ejemplos',
      target: '_self',
    },
    {
      id: 3,
      path: PATHS.REPOSITORIES,
      title: 'Repositorios',
      target: '_self',
    },
    {
      id: 4,
      path: PATHS.CONTACT_ME,
      title: 'Saludar',
      target: '_self',
      isButton: true,
    },
  ];

  return (
    <Wrapper color={menuColor ? menuColor : 'bun'}>
      <LogoContainer>
        <Logo onClick={() => navigate(PATHS.HOME)} />
      </LogoContainer>
      <LinkContainer>
        {links.map(link => {
          const { id, path, title, target, isButton } = link;
          return isButton ? (
            <Button
              key={id}
              title={title}
              onClick={() => {
                console.log(path);
                navigate(path);
              }}
            />
          ) : (
            <Link key={id} to={path} target={target}>
              {title}
            </Link>
          );
        })}
      </LinkContainer>
    </Wrapper>
  );
};

export { Header };
