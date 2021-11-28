import React from 'react'
import QRCode from 'qrcode.react';

    const qrValue="https://fridge.in.ngrok.io/joystick"
    //const qrValue="http://localhost:3000"
function QRR() {
    return (
        <div className='qrr_scanner'>
            <QRCode value={qrValue} size={110}></QRCode>
        </div>
    )
}

export default QRR
