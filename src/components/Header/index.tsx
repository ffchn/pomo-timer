import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './styles'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/" className="logo" title="Home">
        <span>pomo-timer</span>
      </NavLink>
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderWrapper>
  )
}
