import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutWrapper } from './styles'

export default function DefaultLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}
