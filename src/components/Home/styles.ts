import styled from 'styled-components'

export const HomeWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.25rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme['gray-700']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskDescriptionInput = styled(BaseInput)`
  flex: 1;
`
export const TimerDurationInput = styled(BaseInput)`
  max-width: 4rem;
`

export const TimerContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  .separator {
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    line-height: 0;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`
