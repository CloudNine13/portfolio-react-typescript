import { ButtonHTMLAttributes } from 'react';
import { ExternalImage, StyledButton } from './Button.style';
import externalImage from 'assets/svg/external_link.svg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  external?: boolean;
};

const Button = ({
  title,
  type,
  primary = true,
  external = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $primary={primary} type={type} {...props}>
      {title}
      {external && <ExternalImage src={externalImage} />}
    </StyledButton>
  );
};

export { Button };
