import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  CkeckoutContainer,
  Frame1,
  Frame2,
  BaseCard,
  SubmitButton,
  CoffeeList,
} from './styles'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { useContext } from 'react'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { CoffeeSelected } from './components/CoffeeSelected'
import { useNavigate } from 'react-router-dom'

interface checkoutProps {
  cep: string
  street: string
  number: string
  addressComplement: string
  district: string
  city: string
  stateAdress: string
  paymentMethod: string
}

const invoiceFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, 'CEP inválido!')
    .max(9, 'O CEP deve ter 9 caracteres'),
  number: zod.string(),
  addressComplement: zod.string(),
  street: zod.string().min(1, 'Informe a rua da sua residência'),
  district: zod.string().min(1, 'Informe o bairro da residência'),
  city: zod.string().min(1, 'Informe o município da residência'),
  stateAdress: zod.string().min(1, 'Informe o Estado da residência').max(2),
  paymentMethod: zod.string().min(1, 'Selecione o tipo de pagamento'),
})

export type OrderData = zod.infer<typeof invoiceFormValidationSchema>

type InvoiceFormData = OrderData
export function Checkout() {
  const invoiceOrderForm = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      addressComplement: '',
      district: '',
      city: '',
      stateAdress: '',
      paymentMethod: '',
    },
  })

  const { orders, finishOrder } = useContext(DeliveryContext)

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = invoiceOrderForm

  const amoutOfProducts = orders.length
  const isButtonDesabled = amoutOfProducts === 0
  const navigate = useNavigate()

  function handleFinishOrder(data: InvoiceFormData) {
    finishOrder(data)
    reset()
    navigate('/delivery')
  }
  return (
    <CkeckoutContainer>
      <FormProvider {...invoiceOrderForm}>
        <form onSubmit={handleSubmit(handleFinishOrder)}>
          <Frame1>
            <h1>Complete seu pedido</h1>
            <AddressForm errorMessage={errors.cep?.message} />
            <PaymentForm errorMessage={errors.paymentMethod?.message} />
          </Frame1>
          <Frame2>
            <h1>Cafés selecionados</h1>
            <BaseCard>
              {!amoutOfProducts && <div>Sem produtos por enquanto ...</div>}

              {orders.map((order) => {
                return (
                  <CoffeeList key={order.id}>
                    <CoffeeSelected
                      productName={order.productName}
                      productImage={order.productImage}
                      productAmount={order.productAmount}
                      orderId={order.id}
                    />
                    <span>
                      R$ {''}
                      {order.productPrice.toLocaleString('pt-br', {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </CoffeeList>
                )
              })}

              <SubmitButton disabled={isButtonDesabled} type="submit">
                CONFIRMAR PEDIDO
              </SubmitButton>
            </BaseCard>
          </Frame2>
        </form>
      </FormProvider>
    </CkeckoutContainer>
  )
}
