import { MENU_LINK_TYPE, PATHS, SCROLL_INTO_VIEW_IDS } from 'utils';
import { LogoContainer, Logo, Link, Wrapper, LinkContainer, StyledButton } from './Header.style';
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
      type: MENU_LINK_TYPE.SCROLL,
      path: SCROLL_INTO_VIEW_IDS.SKILLS,
      title: 'Habilidades',
    },
    {
      id: 2,
      type: MENU_LINK_TYPE.SCROLL,
      path: SCROLL_INTO_VIEW_IDS.PROJECTS,
      title: 'Proyectos',
    },
    {
      id: 3,
      type: MENU_LINK_TYPE.SCROLL,
      path: PATHS.REPOSITORIES,
      title: 'Repositorios',
    },
    {
      id: 4,
      type: MENU_LINK_TYPE.SCROLL,
      path: PATHS.CONTACT_ME,
      title: 'Saludar',
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
