import { StyledButton } from './Button.style';

type ButtonProps = {
  title: string;
  primary?: boolean;
  onClick?: () => void;
};

const Button = ({ title, primary = true, onClick }: ButtonProps) => {
  return (
    <StyledButton $primary={primary} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export { Button };
