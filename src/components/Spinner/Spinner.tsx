import React from 'react';
import { Container, SpinnerImage, Wrapper } from './Spinner.style';

type SpinnerProps = {
  width?: string;
  height?: string;
};

const Spinner = ({ width, height }: SpinnerProps) => (
  <Wrapper>
    <Container width={width} height={height}>
      <SpinnerImage>
        <div />
        <div />
      </SpinnerImage>
    </Container>
  </Wrapper>
);

export { Spinner };
