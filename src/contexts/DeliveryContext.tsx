import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  ActionTypes,
  addNewOrderAction,
  deleteItemAction,
  finishOrderAction,
  updateOrderAction,
} from '../reducers/orders/actions'
import { Order, orderReducer } from '../reducers/orders/reducers'

export interface Product {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export interface AddressProps {
  cep: string
  street: string
  number: string
  addressComplement: string
  district: string
  city: string
  stateAdress: string
  paymentMethod: string
}

export interface CreateNewOrderData {
  productId: string
  productAmount: number
  productName: string
  productImage: string
  productPrice: number
  createdAt: Date
}

interface DeliveryContextType {
  productList: Product[]
  orders: Order[]
  address: AddressProps
  AddNewOrder: (data: CreateNewOrderData) => void
  finishOrder: (data: AddressProps) => void
  updateOrder: (actualOrderId: string, productAmount: number) => void
  deleteItem: (orderId: string) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

const productList = [
  {
    id: '01-Tr',
    image: './src/assets/Expresso.png',
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '02-TrA',
    image: './src/assets/Americano.png',
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '03-TrCm',
    image: './src/assets/ExpressoCremoso.png',
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '04-Gl',
    image: './src/assets/CafeGelado.png',
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Cremoso',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '05-TrcL',
    image: './src/assets/CafeComLeite.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '06-LT',
    image: './src/assets/Latte.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '07-Cpcc',
    image: './src/assets/Capuccino.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '08-Mcc',
    image: './src/assets/Macchiato.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '09-Mocc',
    image: './src/assets/Mocaccino.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10-CQ',
    image: './src/assets/ChocolateQuente.png',
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11-Cb',
    image: './src/assets/Cubano.png',
    tags: ['ESPECIAL', 'ALCÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12-Hv',
    image: './src/assets/Havaiano.png',
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13-Ar',
    image: './src/assets/Arabe.png',
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14-Ir',
    image: './src/assets/Irlandes.png',
    tags: ['ESPECIAL', 'ALCÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
] as Product[]

export const DeliveryContext = createContext({} as DeliveryContextType)

export function DeliveryContextProvider({ children }: DeliveryProviderProps) {
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    addressComplement: '',
    district: '',
    city: '',
    stateAdress: '',
    paymentMethod: '',
  })
  const [orderState, dispach] = useReducer(
    orderReducer,
    {
      orders: [],
    },
    () => {
      const storedOrderStateAsJSON = localStorage.getItem(
        '@coffee-delivery: orders-state-1.0.0',
      )
      if (storedOrderStateAsJSON) {
        return JSON.parse(storedOrderStateAsJSON)
      }

      return {
        orders: [],
      }
    },
  )

  const { orders } = orderState

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)

    localStorage.setItem('@coffee-delivery: orders-state-1.0.0', stateJSON)
  }, [orderState])

  function AddNewOrder(data: CreateNewOrderData) {
    const id = String(new Date().getTime())
    const newOrder: Order = {
      id,
      productId: data.productId,
      productAmount: data.productAmount,
      productName: data.productName,
      productImage: data.productImage,
      productPrice: data.productPrice,
      createdAt: new Date(),
    }
    dispach(addNewOrderAction(newOrder))
    setAddress({
      cep: '',
      street: '',
      number: '',
      addressComplement: '',
      district: '',
      city: '',
      stateAdress: '',
      paymentMethod: '',
    })
  }

  function finishOrder(data: AddressProps) {
    setAddress(data)
    dispach(finishOrderAction())
  }

  function updateOrder(productId: string, productAmount: number) {
    dispach(updateOrderAction(productId, productAmount))
  }
  function deleteItem(orderId: string) {
    dispach(deleteItemAction(orderId))
  }
  return (
    <DeliveryContext.Provider
      value={{
        productList,
        orders,
        AddNewOrder,
        finishOrder,
        updateOrder,
        deleteItem,
        address,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
