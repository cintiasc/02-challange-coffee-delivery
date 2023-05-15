import { Minus, Plus } from 'phosphor-react'
import { AmountContainer, IconContainer } from './styles'

interface AmountProps {
  handleDecrease: () => void
  handleIncrement: () => void
  quantity: number
}

export function Amount({
  handleDecrease,
  handleIncrement,
  quantity,
}: AmountProps) {
  return (
    <AmountContainer>
      <IconContainer
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        <Minus size={14} weight="fill" />
      </IconContainer>
      <span>{quantity.toString()}</span>
      <IconContainer
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= 20}
      >
        <Plus size={14} weight="fill" />
      </IconContainer>
    </AmountContainer>
  )
}
