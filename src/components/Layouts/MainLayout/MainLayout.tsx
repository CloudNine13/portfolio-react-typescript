import { WithSuspense } from './WithSuspense';
import { Container, Wrapper } from './MainLayout.style';

type MainLayoutProps = {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
};

const MainLayout = ({ loader }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Container>
        <WithSuspense loader={loader} />
      </Container>
    </Wrapper>
  );
};

export { MainLayout };
