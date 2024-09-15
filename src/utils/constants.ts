const PATHS: Readonly<Record<string, string>> = {
  HOME: '/',
  ABOUT_ME: '/about-me',
  EXAMPLES: '/examples',
  REPOSITORIES: '/repositories',
  CONTACT_ME: '/contact-me',
  NOT_FOUND: '/dead-link',
  EVERYWHERE_ELSE: '*',
  SELF: '#',
};

enum MENU_LINK_TYPE {
  SCROLL = 'scroll',
  LINK = 'link',
}

const SCROLL_INTO_VIEW_IDS = {
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONTACT: 'contact',
};

export { PATHS, MENU_LINK_TYPE, SCROLL_INTO_VIEW_IDS };
