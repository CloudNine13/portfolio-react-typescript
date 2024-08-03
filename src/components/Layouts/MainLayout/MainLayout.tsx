import { WithSuspense } from './WithSuspense';
import { Container, Wrapper } from './MainLayout.style';
import { Menu } from '../Menu';

type MainLayoutProps = {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
};

const MainLayout = ({ loader }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <WithSuspense loader={loader} />
      </Container>
    </Wrapper>
  );
};

export { MainLayout };
