import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGray};
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export { Wrapper };
