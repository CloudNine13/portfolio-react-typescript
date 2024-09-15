import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGray};
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 110px;
  padding-top: 20px;
`;

const Header = styled.h1`
  margin-bottom: 60px;
  margin-top: 75px;
  font-size: ${({ theme }) => theme.fonts.size.xxxl};
  color: ${({ theme }) => theme.colors.black};
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 60px;
  margin-bottom: 20px;
`;

export { Wrapper, Header, SkillsContainer };
