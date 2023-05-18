import { useNavigate, useLocation } from 'react-router-dom'
import { useContext} from 'react'
import AppContext from "../context/AppContext"

// icons
import { HiOutlineClipboardList } from 'react-icons/hi'
import { BsWallet2 } from 'react-icons/bs'
import { bold } from 'colors'

function LowerNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const {orderList} = useContext(AppContext)

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  if(location.pathname === '/sign-up' || location.pathname === '/sign-in' || location.pathname === '/forgot-password') return ("") 
  else return (
    <nav className="lower-nav">
        <div className="nav-item">
            <div className="btn order-btn" onClick={() => navigate('/order')}>order</div>
        </div>
        <div    className={`nav-item ol-item ${pathMatchRoute('/order-list') ? 'nav-item-active' : ''}`}
                onClick={() => navigate('/order-list')}
        >
            <HiOutlineClipboardList />
            <p>order list
              <span>{orderList.length ? ' (' + orderList.length + ')' : ''}</span>
            </p>
        </div>
        <div    className={`nav-item ${pathMatchRoute('/wallet') ? 'nav-item-active' : ''}`}
                onClick={() => navigate('/wallet')} 
        >
            <BsWallet2 />
            <p>wallet</p>
        </div>
    </nav>
  )
}

export default LowerNav