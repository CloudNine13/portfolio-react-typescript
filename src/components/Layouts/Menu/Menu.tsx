import { NavLink } from 'react-router-dom';
import { PATHS } from 'utils/constants';
import { Wrapper } from './Menu.style';

const Menu = () => {
  const links = [
    {
      path: PATHS.ABOUT_ME,
      title: 'About Me',
      target: '_self',
    },
  ];

  return (
    <Wrapper>
      {links.map(link => (
        <NavLink to={link.path} title={link.title} target={link.target}></NavLink>
      ))}
    </Wrapper>
  );
};

export { Menu };
