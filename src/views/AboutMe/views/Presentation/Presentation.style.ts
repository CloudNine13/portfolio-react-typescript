import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 30px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -320px;
`;

const GreetingsWrapper = styled.div`
  display: flex;
  width: 880px;
  align-items: end;
  z-index: 1;
`;

export { Wrapper, ImageContainer, GreetingsWrapper };
