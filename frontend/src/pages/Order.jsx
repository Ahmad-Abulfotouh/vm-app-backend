import QRCode from 'react-qr-code'

function Order() {
  return (
    <div className='qr-code'>
      <p>Scan the QR code in the machine</p>
      <QRCode value="ahmad@gmail.com" />
    </div>
  )
}

export default Order