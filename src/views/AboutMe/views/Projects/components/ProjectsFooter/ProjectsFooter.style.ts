import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 90px;
  text-align: center;
  width: 720px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};
`;

const High = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-style: ${({ theme }) => theme.fonts.style.italic};
  display: inline-block;
`;

export { Wrapper, High };
