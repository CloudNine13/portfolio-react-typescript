import { useScrollButton } from './hooks';
import { Button, Image } from './ScrollButton.style';
import ArrowUp from 'assets/svg/arrow_up.svg';

const ScrollButton = () => {
  const { visible, scrollToTop } = useScrollButton();

  return (
    <Button onClick={scrollToTop} $visible={visible}>
      <Image src={ArrowUp} />
    </Button>
  );
};

export { ScrollButton };
