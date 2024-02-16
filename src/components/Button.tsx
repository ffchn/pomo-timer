import { ButtonVariant, ButtonWrapper } from "./Button.styles";

interface ButtonProps {
  type?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonWrapper variant={variant}>Submit</ButtonWrapper>;
}
