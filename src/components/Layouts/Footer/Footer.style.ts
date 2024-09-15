import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 65px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  z-index: 10;
`;

const CopyrightContainer = styled.div`
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.gray};
  user-select: none;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-right: 30px;
`;

const Image = styled.img`
  max-width: 28px;
  max-height: 28px;
  cursor: pointer;

  &:last-child {
    margin-top: 5px;
  }
`;

const GithubLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};
`;

export { Wrapper, CopyrightContainer, LinkContainer, Image, GithubLink };
