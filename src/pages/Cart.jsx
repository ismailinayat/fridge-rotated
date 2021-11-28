import React, {useContext/*, useEffect*/} from 'react';
import {ItemContext} from '../contexts/ItemContext';
import { Link/*, useNavigate*/ } from 'react-router-dom';
//import {useSocket} from '../contexts/SocketProvider';

function Cart() {

    //const socket = useSocket();
    const {item} = useContext(ItemContext);
    //const navigate = useNavigate();


    /*useEffect(() => {
        if (socket == null) return
        socket.on('welcome', ()=> {
          navigate('/welcome')
      })
      return () => socket.off('welcome')
      })*/


    return (
        <div className='cart-container'>
            <div className="bar top-bar"></div>

            <div className="logo">
                <img className="logo-img" src="/UI/Logo.png" alt="" />
            </div>

            <div className="go-home">
            <Link to='/joystick'><button className='back'>Back to Joystick</button></Link>
            </div>

            <div className="cart-heading"><h3>My Cart (1)</h3></div>

            <div className="item">
                <div className="item-image">
                    <img src={item.img} alt="dairy milk" />
                </div>

                <div className="item-info">
                    <div className="item-name">
                        <h3>{item.name}</h3>
                    </div>

                    <div className="item-quantity">
                        <p>Quantity: 1</p>
                    </div>

                    <div className="delete-btn">
                        Delete
                    </div>
                </div>

                <div className="item-price"><h3>{item.price}</h3></div>
            </div>

            <div className="cart-total">
                <div className="total-heading"><h3>Sub-Total</h3></div>
                <div className="total-amount"><h3>{item.price}</h3></div>
            </div>

            <div className="tax-paragraph"><p>Prices inclusive of taxes</p></div>

            {
            /*<div className="qr">
                <div className="qr-image-container"><img src="/UI/qr-payment.png" alt="" className="qr-image" /></div>
                <div className="qr-info"><p>Scan QR Code & Pay the Bill</p></div>
            </div>*/
}

            <div onClick={()=> window.location.replace('https://pages.razorpay.com/pl_IQNfBArFPuH1Z3/view')} className='payment'>
                Pay Now
            </div>

            <div className="bar bottom-bar"></div>
        </div>
    )
}

export default Cart
