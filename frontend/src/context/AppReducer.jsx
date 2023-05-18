function AppReducer(state, action) {
  switch (action.type) {
    case 'GET_MACHINE_DATA': return {
      ...state,
      machineData: action.payload
    }
    case 'ADD_ORDER_LIST_ITEM': return {
        ...state,
        orderList: [...state.orderList, (() => {action.payload[0].orderId = state.orderList.length; return action.payload[0]})()],
        totalOrderPrice: state.totalOrderPrice + action.payload[0].price
    }
    case 'CLEAR_ORDER_LIST': return {
      ...state,
      orderList: []
    }
    case 'SET_LOADING': return {
        ...state,
        loading: true
    }
    default: return state
  }
  return (
    <div>AppReducer</div>
  )
}
export default AppReducer