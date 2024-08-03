import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
`;

const Container = styled.div<{ width?: string; height?: string }>`
  position: relative;
  margin-top: 0;
  top: ${({ width, height }) => (width && height ? 'initial' : '-128')}
  width: ${({ width }) => (width ? width : '64px')}
  height: ${({ height }) => (height ? height : '64px')}
`;

const animationKeyframes = keyframes`
  0% {
    top: 29px;
    left: 29px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -2px;
    left: -2px;
    width: 60px;
    height: 60px;
    opacity: 0;
  }
`;

const SpinnerImage = styled.div`
  div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.colors.black};
    opacity: 1;
    border-radius: 50%;
    animation: ${animationKeyframes} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export { Wrapper, Container, SpinnerImage };
