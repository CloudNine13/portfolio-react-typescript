import styled from 'styled-components';

const Header = styled.h1`
  margin: 0;
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fonts.size.xxxl};
  color: ${({ theme }) => theme.colors.black};
`;

const SectionDescription = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.large};
  width: 900px;
  color: ${({ theme }) => theme.colors.gray};
`;

const High = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-style: ${({ theme }) => theme.fonts.style.italic};
  display: inline-block;
`;

export { Header, SectionDescription, High };
