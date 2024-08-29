import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div<{ $isInView: boolean }>`
  flex-direction: column;
  display: flex;
  align-items: center;
  opacity: ${({ $isInView }) => ($isInView ? 1 : 0)};
  transition: ${({ theme }) => theme.animations.transitions.cubicBezierFadeIn};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fonts.size.large};
`;

const GreetingsContainer = styled.h2`
  text-align: justify;
  font-size: ${({ theme }) => theme.fonts.size.xxxl};
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Benett Sans';
  width: 30%;
  user-select: none;
  text-align: center;
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  display: inline-block;
`;

const HighlightedTextItalic = styled(HighlightedText)`
  font-style: ${({ theme }) => theme.fonts.style.italic};
`;

const DescriptionContainer = styled.div`
  width: 90%;
  text-align: justify;
  line-height: 30px;
  margin-top: 130px;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.brown};
  text-decoration: none;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.brown},
    ${({ theme }) => theme.colors.brown}
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 10%;
  transition: all 0.3s cubic-bezier(0.32, 0, 0.67, 0);

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    background-size: 100% 100%;
  }
`;

const Spoiler = styled.span<{ $isHidden: boolean }>`
  background-color: ${({ $isHidden, theme }) => ($isHidden ? theme.colors.black : 'transparent')};
  color: ${({ $isHidden, theme }) => ($isHidden ? theme.colors.black : theme.colors.gray)};
  transition: all 0.3s ease;
`;

const ButtonContainer = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export {
  Wrapper,
  GreetingsContainer,
  HighlightedTextItalic,
  HighlightedText,
  DescriptionContainer,
  LinkStyled,
  Spoiler,
  ButtonContainer,
};
