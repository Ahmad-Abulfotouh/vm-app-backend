import {useContext} from 'react'
import AppContext from "../context/AppContext"

function OrderList() {
  const {orderList, totalOrderPrice, dispatch} = useContext(AppContext)

  return (
      <div className="order-list">
        <div className="header">
          <h2>order list</h2>
          <div className="clear-btn" onClick={() => {dispatch({type: 'CLEAR_ORDER_LIST'})}}>clear</div>
        </div>
        <div className="list">
          {
            orderList.length ? orderList.map((p) => (
              <div className='item' key={p.orderId}>
                - {p.title}
              </div>
            )) : 'add some thing!'
          }
        </div>
        <p className="price">
          total: {totalOrderPrice}
          <span> L.E</span>
        </p>
      </div>
  )
}

export default OrderList