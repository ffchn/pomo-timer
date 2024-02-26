import styled from 'styled-components'
import { ButtonProps, ButtonVariants } from './index'

const VARIANT_COLORS = (variant: ButtonVariants) => {
  switch (variant) {
    case 'default':
      return 'green-500'
    case 'danger':
      return 'red-500'
    default:
      return 'green-500'
  }
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  background: ${(props) => props.theme[VARIANT_COLORS(props.variant!)]};
  color: ${({ theme }) => theme['gray-100']};
  transition: 0.5s ease;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme['gray-600']};
  }
`
