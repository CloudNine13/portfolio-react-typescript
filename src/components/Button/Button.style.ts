import styled from 'styled-components';

type ButtonProps = {
  $primary?: boolean;
};

const StyledButton = styled.div<ButtonProps>`
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.black : theme.colors.white};
  border-radius: 7.5px;
  border: 2px solid;
  border-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.darkGray : theme.colors.lightGray};
  color: ${({ theme, $primary }) => ($primary ? theme.colors.white : theme.colors.black)};
  transition: background-color, color, 0.35s;
  padding: 6px 10px;
  user-select: none;
  font-size: ${({ $primary }) => ($primary ? '22' : '20')}px;

  &:hover {
    background-color: ${({ theme, $primary }) =>
      $primary ? theme.colors.darkGray : theme.colors.lightGray} !important;
  }

  &:active {
    transform: translateY(2px);
    transition: transform 0.05s;
    pointer-events: none;
  }
`;

export { StyledButton };
