import { CurrencyDollar } from 'phosphor-react'
import { PaymentContainer, PaymentGroupTitle } from './styles'
import { PaymentSelect } from './components/PaymentSelect'

export function PaymentForm({ errorMessage }: any) {
  return (
    <PaymentContainer>
      <PaymentGroupTitle>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentGroupTitle>
      <PaymentSelect />
      {errorMessage && <h6>{errorMessage}</h6>}
    </PaymentContainer>
  )
}
