import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Icon,
  Info,
  Message,
  OrderContainer,
  OrderInfo,
  SuccessContainer,
  TitleContainer,
} from './style'
import { DeliveryContext } from '../../contexts/DeliveryContext'

import illustration from '../../assets/Illustration.png'
import { useContext } from 'react'
export function Delivery() {
  const { address } = useContext(DeliveryContext)
  return (
    <SuccessContainer>
      {address.street === '' && (
        <Message>Sem produtos por enquanto ...</Message>
      )}

      {address.street !== '' && (
        <>
          <TitleContainer>
            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </TitleContainer>
          <OrderContainer>
            <OrderInfo>
              <Info>
                <Icon itemColor="purple">
                  <MapPin size={16} weight="fill" />
                </Icon>
                <div>
                  <p>
                    Entrega em{' '}
                    <span>
                      {address.street}, {address.number}
                    </span>
                  </p>
                  <p>
                    {address.district} - {address.city}, {address.stateAdress}
                  </p>
                </div>
              </Info>
              <Info>
                <Icon itemColor="yellowLight">
                  <Timer size={16} weight="fill" />
                </Icon>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <span>20 min - 30 min</span>
                  </p>
                </div>
              </Info>
              <Info>
                <Icon itemColor="yellowDark">
                  <CurrencyDollar size={16} weight="fill" />
                </Icon>
                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <span>{address.paymentMethod}</span>
                  </p>
                </div>
              </Info>
            </OrderInfo>
            <img src={illustration} alt="Motoboy saindo para entrega" />
          </OrderContainer>
        </>
      )}
    </SuccessContainer>
  )
}
