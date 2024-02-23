import { type ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

type ButtonVariants = 'default' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  return <ButtonWrapper {...props} />
}
