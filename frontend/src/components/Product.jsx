import {useContext} from 'react'
import AppContext from "../context/AppContext"

// icons
import { IoIosAddCircle } from 'react-icons/io'

function Product({pID, title, imgUrl, price}) {
  const {machineData, dispatch} = useContext(AppContext)

  return (
    <div className="product">
        <div className="product-img">
            <img src={imgUrl} style={{width: '100px', height: '100px'}} alt={title} />
        </div>
        <div className="product-details">
            <h2>{title}</h2>
            <p className="price">{price} <span>L.E</span></p>
        </div>
        <div className="add" onClick={() => {
          dispatch({
            type: 'ADD_ORDER_LIST_ITEM',
            payload: machineData.products.filter((p) => p.id === pID)
          })
        }
        }>
            <IoIosAddCircle />
        </div>
    </div>
  )
}

export default Product