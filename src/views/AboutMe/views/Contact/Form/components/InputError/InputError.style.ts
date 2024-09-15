import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.white};
`;

const Error = styled.img`
  position: relative;
  width: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export { Wrapper, Error, ErrorContainer };
