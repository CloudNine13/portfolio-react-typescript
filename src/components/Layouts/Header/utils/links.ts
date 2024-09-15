import { MENU_LINK_TYPE, SCROLL_INTO_VIEW_IDS, PATHS } from 'utils';

type Links = {
  id: number;
  type: MENU_LINK_TYPE;
  path: string;
  title: string;
  isButton?: boolean;
};

const links: Array<Links> = [
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
    path: SCROLL_INTO_VIEW_IDS.CONTACT,
    title: 'Saludar',
    isButton: true,
  },
];

export { links };
