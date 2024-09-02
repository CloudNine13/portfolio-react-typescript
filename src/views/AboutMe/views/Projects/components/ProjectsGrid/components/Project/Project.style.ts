import { Button } from 'components';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  height: 375px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 7.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.48);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  align-items: center;
  border-radius: 7.5px 7.5px 0 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;

const InfoWrapper = styled.div`
  margin: 0 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  display: inline-block;
  transform: scale(1.1, 1.3);
  margin-left: 15px;
  text-align: left;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DateImg = styled.img`
  width: auto;
  height: 20px;
  margin-right: 10px;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 5px;
`;

const StyledButton = styled(Button)`
  text-align: center !important;
  font-size: ${({ theme }) => theme.fonts.size.large} !important;
  margin-top: 10px;
`;

export {
  Wrapper,
  ImageContainer,
  Image,
  InfoWrapper,
  TitleContainer,
  DateContainer,
  DateImg,
  TechnologiesContainer,
  StyledButton,
};
