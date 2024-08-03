import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.amour};
`;

export { Wrapper };
