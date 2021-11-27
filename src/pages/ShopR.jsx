import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSocket} from '../contexts/SocketProvider';
import {ItemContext} from '../contexts/ItemContext';

function ShopR() {


    const navigate = useNavigate()
    const [currentSelected, setCurrentSelected] = useState(1);
    const {setItem} = useContext(ItemContext)

    const socket = useSocket();

    useEffect(() => {
        if (socket == null) return
        socket.on('left', ()=> {
            console.log('left clicked')
            setCurrentSelected(currentSelected - 1)

        })

        return () => socket.off('left')
        
    })

    useEffect(() => {
        if (socket == null) return
        socket.on('right', ()=> {
            console.log('right clicked')
            setCurrentSelected(currentSelected + 1)

        })

        return () => socket.off('right')
        
    })
    useEffect(() => {
        if (socket == null) return
        socket.on('top', ()=> {
            console.log('top clicked')
            setCurrentSelected(currentSelected - 3)
       
        })

        return () => socket.off('top')
        
    })
    useEffect(() => {
        if (socket == null) return
        socket.on('bottom', ()=> {
            console.log('bottom clicked')
            setCurrentSelected(currentSelected + 3)

        })

        return () => socket.off('bottom')
        
    })

    useEffect(() => {

        if (socket == null) return
        socket.on('welcome', ()=> {
            navigate('/welcome')

        })

        return () => socket.off('welcome')
    })



    useEffect(() => {
        if (socket == null) return
        socket.on('ok', ()=> {
            setItem(items[currentSelected])
            navigate('/cart')
        })

        return () => socket.off('ok')
    })

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
        <div className='shopr-container'>
            <div className="logo-r">

                
                <img className="logo-img-r" src="/UI/Logo-r.png" alt="" />
    </div>

            <div className="item-container">
                <div className="item-container-inner">

                    <div className="item-1-container">

                        {
                            currentSelected === 1 ?
                            <img className="item-1" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-1" src="/UI/items/item-1.png" alt="" />
                        }
                        

                    </div>

                    <div className="item-2-container">

                        {
                            currentSelected === 2 ?
                            <img className="item-2" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-2" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-3-container">

                    {
                            currentSelected === 3 ?
                            <img className="item-3" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-3" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-4-container">

                    {
                            currentSelected === 4 ?
                            <img className="item-4" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-4" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-5-container">

                    {
                            currentSelected === 5 ?
                            <img className="item-5" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-5" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-6-container">

                    {
                            currentSelected === 6 ?
                            <img className="item-6" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-6" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-7-container">

                    {
                            currentSelected === 7 ?
                            <img className="item-7" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-7" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-8-container">

                    {
                            currentSelected === 8 ?
                            <img className="item-8" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-8" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-9-container">

                    {
                            currentSelected === 9 ?
                            <img className="item-9" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-9" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-10-container">

                    {
                            currentSelected === 10 ?
                            <img className="item-10" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-10" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-11-container">

                    {
                            currentSelected === 11 ?
                            <img className="item-11" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-11" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-12-container">

                    {
                            currentSelected === 12 ?
                            <img className="item-12" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-12" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-13-container">

                    {
                            currentSelected === 13 ?
                            <img className="item-13" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-13" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-14-container">

                    {
                            currentSelected === 14 ?
                            <img className="item-14" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-14" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>

                    <div className="item-15-container">

                    {
                            currentSelected === 15 ?
                            <img className="item-15" src="/UI/items/item-selected-1.png" alt="" />:
                            <img className="item-15" src="/UI/items/item-1.png" alt="" />
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopR
