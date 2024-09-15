import styled from 'styled-components';

type ButtonProps = {
  $primary?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
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
  font-family: 'TT Firs Neue';

  &:hover:enabled {
    background-color: ${({ theme, $primary }) =>
      $primary ? theme.colors.darkGray : theme.colors.lightGray} !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  &:active:enabled {
    transform: translateY(2px);
    transition: transform 0.05s;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

const ExternalImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

export { StyledButton, ExternalImage };
