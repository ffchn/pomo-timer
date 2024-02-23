import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .logo {
    color: white;
    text-decoration: none;
    font-family: 'Roboto mono', monospace;
  }

  nav {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme['gray-100']};
      transition: 0.5s;
      border-bottom: 3px solid transparent;

      &.active {
        border-color: ${({ theme }) => theme['green-500']};
      }

      &:hover {
        background-color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
