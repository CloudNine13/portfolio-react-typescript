import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export { Wrapper };
