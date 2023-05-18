import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from "../context/AppContext"

// components
import Product from '../components/Product'

// icons
import { AiFillCaretDown, AiOutlineSearch, AiOutlineQrcode } from 'react-icons/ai'

function Home() {
  const navigate = useNavigate()
  const { machines, machineId, machineData, getMachineData, getMachines } = useContext(AppContext)

  useEffect(() => {
    if(!localStorage.getItem('user')) {
      navigate('/sign-in')
    }
    if(!machines) {
      // getMachines()
    }
    if(machineId) {
      // getMachineData(machineId)
    }
  }, [machineId])

  // sellecting machine box
  const [machinesList, setMachinesList] = useState(false)

  return (
    <>
      <div className="machine">
        <div className="main" onClick={() => setMachinesList(!machinesList)}>
          <p className='title'>machine: </p>
          <p className='choose'><span>001</span>BUC machine <AiFillCaretDown /></p>
        </div>
        <div className={`list ${ machinesList ? 'list-open' : '' }`}>
          <div className="header">
            <div className="search">
              <input type="text" name="" id="" placeholder='Machine Number' />
              <div className="search-icon"><AiOutlineSearch /></div>
            </div>
            <div className="location">
              <div className="location-icon"><AiOutlineQrcode /></div>
              <p>by QR code</p>
            </div>
          </div>
          <div className="content"></div>
        </div>
      </div>
      <div className="products-filter">
        <div className="filter-item filter-item-active">salty</div>
        <div className="filter-item">sweet</div>
      </div>
      {
        machineData.products ? machineData.products.map((p) => (
          <Product key={p.id} title={p.title} price={p.price} pID={p.id} imgUrl={p.imgUrl} />
        )) : 'no data'
      }
    </>
  )
}

export default Home