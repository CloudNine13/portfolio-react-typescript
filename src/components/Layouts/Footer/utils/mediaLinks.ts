import github from 'assets/svg/github.svg';
import linkedin from 'assets/svg/linkedin.svg';
import telegram from 'assets/svg/telegram.svg';

type MediaLinks = {
  id: number;
  src: string;
  alt: string;
  url: string;
};

const mediaLinks: Array<MediaLinks> = [
  { id: 0, src: github, alt: 'github', url: 'https://github.com/CloudNine13' },
  { id: 1, src: linkedin, alt: 'linkedin', url: 'https://www.linkedin.com/in/igordzichkovskii/' },
  { id: 2, src: telegram, alt: 'telegram', url: 'https://t.me/CloudNine13' },
];

export { mediaLinks };
