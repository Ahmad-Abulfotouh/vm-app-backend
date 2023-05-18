import React from 'react'

function Wallet() {
  return (
    <>
      <p className="price money-amount">Money Amount: 15 <span>L.E</span></p>
      <div className="procedure main">Use it</div>
      <div className="procedure">
        <img src="./assets/Vodafone_Logo.png" alt="vodafone" />
        <p>Transfer to a Vodafone Cash wallet</p>
      </div>
      <div className="procedure">
        <img src="./assets/Visa.png" alt="visa" />
        <p>Transfer to a bank accont</p>
      </div>
    </>
  )
}

export default Wallet