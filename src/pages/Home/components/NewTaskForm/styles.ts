import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.25rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme['gray-700']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
`

export const TaskDescriptionInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const TimerDurationInput = styled(BaseInput)`
  max-width: 4rem;
`
