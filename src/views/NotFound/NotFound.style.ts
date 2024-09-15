import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const DogImage = styled.img`
  max-width: 550px;
  max-height: 400px;
`;

const Header = styled.h1`
  font-size: 80px;
  margin: 15px;
`;

const Subheader = styled.h2`
  font-size: 40px;
  margin: 5px;
`;

const Text = styled.p`
  font-size: 30px;
  margin: 10px;
  width: 800px;
  margin-bottom: 50px;
`;

const HomeButton = styled.a`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 7.5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color, color, 0.35s;
  padding: 6px 10px;
  user-select: none;
  font-size: 22px;
  font-family: 'TT Firs Neue';
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray} !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  &:active {
    transform: translateY(2px);
    transition: transform 0.05s;
  }
`;

const HomeImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export { Wrapper, ImageContainer, DogImage, Header, Subheader, Text, HomeButton, HomeImage };
