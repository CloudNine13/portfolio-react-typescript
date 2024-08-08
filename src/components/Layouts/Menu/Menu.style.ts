import { NavLink } from 'react-router-dom';
import { ReactComponent as TerminalLogo } from '../../../assets/svg/terminal.svg';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.bun};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Logo = styled(TerminalLogo)`
  cursor: pointer;
  width: 74px;
  height: 74px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Link = styled(NavLink)`
  pointer-events: stroke;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.patty};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  font-size: ${({ theme }) => theme.fonts.size.large};
`;

const Button = styled(Link)`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.tomato};
  border-radius: 35px;
  transition-duration: 0.4s;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato} !important;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Empty = styled.div``;

export { Wrapper, LogoContainer, Logo, LinkContainer, Link, Button, Empty };
