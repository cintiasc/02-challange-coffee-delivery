import { produce } from 'immer'
import { ActionTypes } from './actions'
export interface Order {
  id: string
  productId: string
  productName: string
  productAmount: number
  productImage: string
  productPrice: number
  createdAt: Date
}

interface OrdersState {
  orders: Order[]
  actualAmount: number
}

export function orderReducer(state: OrdersState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER: {
      return produce(state, (draft) => {
        draft.orders.push(action.payload.newOrder)
      })
    }
    case ActionTypes.FINISH_ORDER: {
      return produce(state, (draft) => {
        draft.orders = []
      })
    }
    case ActionTypes.UPDATE_ORDER: {
      const { actualOrderId, amount } = action.payload
      const orderIndex = state.orders.findIndex((order) => {
        return order.id === actualOrderId
      })

      if (orderIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.orders[orderIndex].productAmount = amount
      })
    }
    case ActionTypes.DELETE_ITEM: {
      const { id } = action.payload
      const productIndexToDelete = state.orders.findIndex((order) => {
        return order.id === id
      })

      if (productIndexToDelete < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.orders.splice(productIndexToDelete, 1)
      })
    }
    default:
      return state
  }
}
