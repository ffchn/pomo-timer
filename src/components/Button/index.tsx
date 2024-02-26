import { type ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

export type ButtonVariants = 'default' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  return <ButtonWrapper {...props} />
}
