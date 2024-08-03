import { NavLink } from 'react-router-dom';
import { PATHS } from 'utils/constants';
import { Wrapper } from './Menu.style';

const Menu = () => {
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
      title: 'Contactar',
      target: '_self',
    },
  ];

  return (
    <Wrapper>
      {links.map(link => {
        const { path, title, target } = link;
        return (
          <NavLink key={path} to={path} title={title} target={target}>
            {title}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export { Menu };
