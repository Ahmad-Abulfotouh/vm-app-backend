import React from 'react'

function History() {
  return (
    <div className='history'>
        <h2>history</h2>
        <div className="order">
            <div className="dateAndTime">
                frai 13/1/2023 - 01:32 PM
            </div>
            <div className="text">
                total price: <span className='price'>15 <span>L.E</span></span>
            </div>
        </div>
        <div className="order">
            <div className="dateAndTime">
                frai 13/1/2023 - 01:30 PM
            </div>
            <div className="text">
                total price: <span className='price'>30 <span>L.E</span></span>
            </div>
        </div>
    </div>
  )
}

export default History