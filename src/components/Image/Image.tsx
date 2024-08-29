import { Img } from './Image.style';
import altImage from 'assets/images/no-image.png';

type ImageProps = {
  src: string;
  isInView: boolean;
};

const Image = ({ src, isInView }: ImageProps) => {
  return <Img src={src} alt={altImage} $isInView={isInView} />;
};

export { Image };
