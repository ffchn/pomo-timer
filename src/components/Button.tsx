import { type ButtonVariant, ButtonWrapper } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button ({ variant = 'primary' }: ButtonProps) {
  return <ButtonWrapper variant={variant}>Submit</ButtonWrapper>
}
