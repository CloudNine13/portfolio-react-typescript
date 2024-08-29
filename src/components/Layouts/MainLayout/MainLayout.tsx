import { WithSuspense } from './WithSuspense';
import { Container, Wrapper } from './MainLayout.style';
import { Header } from '../Header';

type MainLayoutProps = {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
  menuColor?: string;
};

const MainLayout = ({ loader, menuColor }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Container>
        <WithSuspense loader={loader} />
      </Container>
    </Wrapper>
  );
};

export { MainLayout };
