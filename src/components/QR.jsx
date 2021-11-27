import React from 'react'
import QRCode from 'qrcode.react';

    const qrValue="https://fridge-sigma.vercel.app/welcome"
    //const qrValue="http://localhost:3000"
function QR() {
    return (
        <div className='qr_scanner'>
            <QRCode value={qrValue} size={110}></QRCode>
        </div>
    )
}

export default QR
