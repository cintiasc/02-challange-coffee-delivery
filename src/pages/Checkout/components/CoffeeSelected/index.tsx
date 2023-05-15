import { Trash } from 'phosphor-react'
import { InputNumber } from '../../../../components/InputNumber'
import { ButtonRemove, CoffeeSelectedContainer, Controller } from './styles'
import { Amount } from './components/Amount'
import { useState, useContext } from 'react'
import { DeliveryContext } from '../../../../contexts/DeliveryContext'

interface CoffeeSelectedProps {
  productName: string
  productImage: string
  productAmount: number
  orderId: string
}
export function CoffeeSelected({
  productName,
  productImage,
  productAmount,
  orderId,
}: CoffeeSelectedProps) {
  const { updateOrder, deleteItem } = useContext(DeliveryContext)
  const [amount, setAmount] = useState(productAmount)
  function handleDecrease() {
    if (amount <= 1) {
      return
    }

    setAmount((state) => state - 1)
    updateOrder(orderId, amount - 1)
  }

  function handleIncrease() {
    setAmount((state) => state + 1)
    updateOrder(orderId, amount + 1)
  }

  function handleDeleteItem(orderId: string) {
    deleteItem(orderId)
  }

  return (
    <CoffeeSelectedContainer>
      <img src={productImage} alt="" />
      <div>
        {productName}
        <Controller>
          <Amount
            handleDecrease={handleDecrease}
            handleIncrement={handleIncrease}
            quantity={amount}
          />
          <ButtonRemove
            onClick={() => {
              handleDeleteItem(orderId)
            }}
            type="button"
          >
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </Controller>
      </div>
    </CoffeeSelectedContainer>
  )
}
