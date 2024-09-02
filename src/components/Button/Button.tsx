import { ExternalImage, StyledButton } from './Button.style';
import externalImage from 'assets/svg/external_link.svg';

type ButtonProps = {
  title: string;
  primary?: boolean;
  external?: boolean;
  onClick?: () => void;
};

const Button = ({ title, primary = true, external = false, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton $primary={primary} onClick={onClick} {...props}>
      {title}
      {external && <ExternalImage src={externalImage} />}
    </StyledButton>
  );
};

export { Button };
