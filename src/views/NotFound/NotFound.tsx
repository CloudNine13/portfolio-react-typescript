import { PATHS } from 'utils';
import {
  Wrapper,
  ImageContainer,
  DogImage,
  Header,
  Subheader,
  Text,
  HomeButton,
  HomeImage,
} from './NotFound.style';
import { imageRandomizer } from './utils';
import Home from 'assets/svg/home.svg';

const NotFound = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <DogImage src={imageRandomizer()} />
      </ImageContainer>
      <Header>404</Header>
      <Subheader>Página No Encontrada</Subheader>
      <Text>
        ¡Ups! Parece que te has aventurado en territorio desconocido. La página que buscas no
        existe.
      </Text>
      <HomeButton href={PATHS.ABOUT_ME}>
        <HomeImage src={Home} />
        Volver a Inicio
      </HomeButton>
    </Wrapper>
  );
};

export { NotFound };
