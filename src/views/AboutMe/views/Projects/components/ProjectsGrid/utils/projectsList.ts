import camillionImage from 'assets/svg/camillion.svg';
import ukpikImage from 'assets/images/ukpik.png';
import sopraImage from 'assets/images/sopra.png';

const projectsList = [
  {
    id: 0,
    title: 'Camillion',
    date: 'may 2019 - jul. 2021',
    image: camillionImage,
    url: 'https://www.camillion.app/',
    technologies: ['Kotlin', 'Swift', 'JS', 'MongoDB'],
  },
  {
    id: 1,
    title: 'UKPIK Productions',
    date: 'ago. 2021 - jul. 2022',
    image: ukpikImage,
    url: 'https://ukpikpro.com/ukpik-pro/',
    technologies: ['Python', 'MERN', 'JS', 'Java', 'Node.js', 'React.js'],
  },
  {
    id: 2,
    title: 'Sopra Steria',
    date: 'jul. 2022 - actualmente',
    image: sopraImage,
    url: 'https://www.soprasteria.es/',
    technologies: ['TS', 'React.js', 'Node.js', 'Java', 'PostgreSQL'],
  },
];

export { projectsList };
