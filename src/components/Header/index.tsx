import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/Logo.png'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { Actions, City, Counter, HeaderContainer } from './styles'
export function Header() {
  const { orders } = useContext(DeliveryContext)
  const numberOfOrders = orders.length

  return (
    <HeaderContainer>
      <nav>
        <NavLink to={'/'} title={'home'}>
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
        <Actions>
          <City>
            <MapPin size={22} weight="fill" />
            <span>Rio de Janeiro, RJ</span>
          </City>
          <NavLink to={'/checkout'} title={'carrinho'}>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {numberOfOrders > 0 && <Counter>{numberOfOrders}</Counter>}
        </Actions>
      </nav>
    </HeaderContainer>
  )
}
