import { CloseButton, ExploreButton, Header, Text, Toast, Wrapper } from './SentLetter.style';
import Cross from 'assets/svg/cross.svg';

type SentLetterProps = { onClick: () => void };

const SentLetter = ({ onClick }: SentLetterProps) => {
  return (
    <Wrapper>
      <Toast>
        <CloseButton src={Cross} onClick={onClick} />
        <Header>¡El mensaje ha sido enviado!</Header>
        <Text>
          Te responderé lo más pronto posible. Mientras tanto puedes explorar más proyectos y
          ejemplos de las tecnologías que uso.
        </Text>
        <ExploreButton title="Explorar" />
      </Toast>
    </Wrapper>
  );
};

export { SentLetter };
