import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCart } from 'phosphor-react'
import { InputNumber } from '../../../../components/InputNumber'
import { DeliveryContext, Product } from '../../../../contexts/DeliveryContext'
import {
  CardContainer,
  InfoContainer,
  TagContainer,
  BuyContainer,
  ShoppingCartButton,
} from './styles'
import { useContext } from 'react'

const newOrderFormValidationSchema = zod.object({
  productAmount: zod.number().min(1, 'Você não adicionou nenhum café'),
})

type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>
export function CoffeeCard({
  id,
  name,
  image,
  tags,
  description,
  price,
}: Product) {
  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      productAmount: 0,
    },
  })

  const { AddNewOrder } = useContext(DeliveryContext)

  const {
    handleSubmit,
    watch,
    reset,
    ref,
    register,
    formState: { errors },
  } = newOrderForm

  function handleCreateNewOrder(data: newOrderFormData) {
    const newOrder = {
      productId: id,
      productName: name,
      productAmount: data.productAmount,
      productImage: image,
      productPrice: price,
      createdAt: new Date(),
    }
    AddNewOrder(newOrder)
  }

  return (
    <CardContainer>
      <img src={image} alt="" />

      <TagContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>
      <InfoContainer>
        <span>{name}</span>
        {description}
      </InfoContainer>
      <BuyContainer>
        <div id="price">
          R${' '}
          <span>
            {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
          <div id="amount">
            <FormProvider {...newOrderForm}>
              <InputNumber inputName="productAmount" />
            </FormProvider>
            <ShoppingCartButton type="submit">
              <ShoppingCart size={22} weight="fill" />
            </ShoppingCartButton>
          </div>
        </form>
      </BuyContainer>
    </CardContainer>
  )
}
