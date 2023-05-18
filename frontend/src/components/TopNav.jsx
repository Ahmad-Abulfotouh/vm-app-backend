import { useState, useContext } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import UserContext from '../context/UserContext'

// icons
import { AiOutlineMenu, AiOutlineHistory, AiOutlineClose } from 'react-icons/ai'
import { ImStarFull } from 'react-icons/im'
import { BiLogOut } from 'react-icons/bi'
import { IoLanguageOutline } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

function TopNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useContext(UserContext)

  const [sideMenu, setSideMinu] = useState(false)

  if(location.pathname === '/sign-up' || location.pathname === '/sign-in' || location.pathname === '/forgot-password') return ("") 
  else return (
    <nav className='top-nav'>
        <div className="nav-item" onClick={() => setSideMinu(true)}>
            <AiOutlineMenu />
        </div>
        <div className="nav-item star">
            <span>0</span>
            <ImStarFull />
        </div>
        <div className={`side-menu ${sideMenu ? 'side-menu-open' : ''}`}>
          <div className="close-section">
            <div className="close" onClick={() => setSideMinu(false)}>
              <AiOutlineClose />
              </div>
          </div>
          <div className="items">
            <div onClick={() => {navigate('/history')
              setSideMinu(false)
            }}><AiOutlineHistory /> history</div>
            <div onClick={() => {navigate('/map')
              setSideMinu(false)
            }}><MdLocationOn /> nearby machine</div>
            <div><IoLanguageOutline /> language</div>
            <div onClick={() => {
              logout()
              navigate('/sign-in')
              setSideMinu(false)
            }}><BiLogOut /> logout</div>
          </div>
        </div>
    </nav>
  )
}

export default TopNav