import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSocket} from '../contexts/SocketProvider';
import {ItemContext} from '../contexts/ItemContext';



function JoyStick() {

    const navigate = useNavigate()
    const socket = useSocket();
    const {setItem} = useContext(ItemContext)

    const [currentSelected, setCurrentSelected] = useState(1);

    useEffect(() => {
        if (socket == null) return
        socket.emit('shop')
    
      })

    const handleLeft = (e) => {

        setCurrentSelected(currentSelected - 1 )
        socket.emit('left')
    
    }
    
    const handleRight = (e) => {
        setCurrentSelected(currentSelected + 1 )
        socket.emit('right')
    }
    
    const handleTop = (e) => {
        setCurrentSelected(currentSelected - 3 )
        socket.emit('top')
    }
    
    const handleBottom = (e) => {
        setCurrentSelected(currentSelected + 3 )
        socket.emit('bottom')
    }
    
    const handleOk = (e) => {
        //socket.emit('ok')
        navigate('/cart')
    }

    const handleGoBack = (e) => {
        setItem(items[currentSelected])
        socket.emit('/home-video');
        navigate('/home-video')
    }

    const items = [
        {
            id : 1,
            name : 'Cadbury Golden Biscuit Crunch',
            img : '1.jpg',
            price : 'INR 450'
        },

        {
            id : 2,
            name : 'Cadbury Turkish',
            img : '2.jpg',
            price : 'INR 650'
        },

        {
            id : 3,
            name : 'Cadbury BANANA ARAMEL CRISP',
            img : '3.jpg',
            price : 'INR 550'
        },

        {
            id : 4,
            name : 'Cadbury Bubbly White Chocolate centre',
            img : '4.jpg',
            price : 'INR 799'
        },

        {
            id : 5,
            name : 'Cadbury Toffee Popcorn',
            img : '5.jpg',
            price : 'INR 350'
        },

        {
            id : 6,
            name : 'Cadbury Fruit and Nut',
            img : '6.jpg',
            price : 'INR 750'
        },

        {
            id : 7,
            name : 'Cadbury DAIM',
            img : '7.jpg',
            price : 'INR 550'
        },

        {
            id : 8,
            name : 'Cadbury Ritz',
            img : '8.jpg',
            price : 'INR 450'
        },

        {
            id : 9,
            name : 'Dairy Milk Treat Size',
            img : '9.jpg',
            price : 'INR 1150'
        },

        {
            id : 10,
            name : 'Dairy Milk And Oreo Selection Box, Box of 8',
            img : '10.jpg',
            price : 'INR 2000'
        },

        {
            id : 11,
            name : 'Dairy Milk Madbury Simply The Zes',
            img : '11.jpg',
            price : 'INR 650'
        },

        {
            id : 12,
            name : 'Fruit & Nut Blended Chocolate',
            img : '/12.jpg',
            price : 'INR 750'
        },

        {
            id : 13,
            name : 'Dairy Milk Bronzed Creme Crunch',
            img : '/13.jpg',
            price : 'INR 950'
        },

        {
            id : 14,
            name : 'Cherries and Hazelnuts',
            img : '/14.jpg',
            price : 'INR 500'
        },

        {
            id : 15,
            name : 'Dairy Milk Bar of Plenty Roast Hazelnut & Honey Roast Cashews',
            img : '/15.jpg',
            price : 'INR 800'
        },

    


    ]


    return (
        <div className='joystick-container'>
            <div className="bar top-bar">

            </div>

            <div className="go-back" onClick={(e) => handleGoBack(e)}>

                Back
            </div>

            <div className="heading-mobile">
                <h2>Press the arrow key</h2>
            </div>
            
            <div className="joystick">

                <div className="joystick-buttons">
                    <div onClick = {(e) => handleLeft(e)}className="joystick-btn left"><img src="/UI/left.png" alt="" /></div>
                    <div onClick = {(e) => handleRight(e)}className="joystick-btn right"><img src="/UI/right.png" alt="" /></div>
                    <div onClick = {(e) => handleTop(e)}className="joystick-btn top"><img src="/UI/top.png" alt="" /></div>
                    <div onClick = {(e) => handleBottom(e)}className="joystick-btn bottom"><img src="/UI/bottom.png" alt="" /></div>

                    <div onClick = {(e) => handleOk(e)}className="joystick-btn selected">OK</div>
                </div>
            </div>

            <div className="bar bottom-bar">
  
            </div>
        </div>
    )
}

export default JoyStick
