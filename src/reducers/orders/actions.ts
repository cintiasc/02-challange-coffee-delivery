import { Order, AddressProps } from './reducers'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  FINISH_ORDER = 'FINISH_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  DELETE_ITEM = 'DELETE_ITEM',
}

export function addNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}

export function finishOrderAction() {
  return {
    type: ActionTypes.FINISH_ORDER,
  }
}

export function updateOrderAction(actualOrderId: string, amount: number) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      actualOrderId,
      amount,
    },
  }
}

export function deleteItemAction(id: string) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      id,
    },
  }
}
