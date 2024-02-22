import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .logo {
    color: white;
    text-decoration: none;
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
      color: ${(props) => props.theme['gray-100']};
      transition: 0.5s;
      border-bottom: 3px solid transparent;

      &.active {
        border-color: ${(props) => props.theme['green-500']};
      }

      &:hover {
        background-color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
