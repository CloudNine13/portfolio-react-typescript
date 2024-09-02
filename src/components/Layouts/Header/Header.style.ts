import { ReactComponent as TerminalLogo } from '../../../assets/svg/terminal.svg';
import styled from 'styled-components';
import { Button } from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Logo = styled(TerminalLogo)`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 10px;
`;

const Link = styled.div`
  pointer-events: stroke;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weight.demiBold};
  font-size: ${({ theme }) => theme.fonts.size.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2.5px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.size.medium};
`;

export { Wrapper, LogoContainer, Logo, LinkContainer, Link, StyledButton };
