import styled from 'styled-components'

export const TimerWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  .separator {
    padding: 2rem 0;
    color: ${({ theme }) => theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    line-height: 0;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`
