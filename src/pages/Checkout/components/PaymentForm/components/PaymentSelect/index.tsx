import { Bank, CreditCard, Money, Watch } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { SelectContainer, Button, ButtonTag } from './styles'
import { useEffect } from 'react'

const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <SelectContainer>
      <Button>
        <input
          id="creditCard"
          type="radio"
          value="Cartão de crédito"
          checked={true}
          {...register('paymentMethod')}
        />
        <label htmlFor="creditCard">
          <ButtonTag>
            <CreditCard size={16} />
            Cartão de crédito
          </ButtonTag>
        </label>
      </Button>
      <Button>
        <input
          id="debitCard"
          type="radio"
          value="Cartão de débito"
          {...register('paymentMethod')}
        />
        <label htmlFor="debitCard">
          <ButtonTag>
            <Bank size={16} />
            Cartão de débito
          </ButtonTag>
        </label>
      </Button>
      <Button>
        <input
          id="money"
          type="radio"
          value="Dinheiro"
          {...register('paymentMethod')}
        />
        <label htmlFor="money">
          <ButtonTag>
            <Money size={16} />
            Dinheiro
          </ButtonTag>
        </label>
      </Button>
    </SelectContainer>
  )
}
