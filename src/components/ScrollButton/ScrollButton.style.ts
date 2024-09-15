import styled from 'styled-components';

const Button = styled.button<{ $visible?: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'collapse')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  position: fixed;
  right: 40px;
  bottom: 105px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  cursor: pointer;
  height: 60px;
  width: 60px;
  transition: 0.25s;
`;

const Image = styled.img`
  width: 70%;
`;

export { Button, Image };
