
import { LedContext } from '../contexts/LedContext.js';
import {useEffect, useContext} from 'react'
import {useNavigate } from 'react-router-dom';
import SlidesR from '../components/SlidesR'
import QRR from '../components/QRR'

import {useSocket} from '../contexts/SocketProvider';

function HomeR() {

    const {setLed} = useContext(LedContext)
    const navigate = useNavigate()
    const socket = useSocket();

    useEffect(() => {
        if (socket == null) return
        socket.on('welcome', ()=> {
            console.log('welcome on the home triggers')
            navigate('/welcome')
        })

        return () => socket.off('welcome')
    }, [socket, navigate])

    useEffect(() => {
        console.log('this is triggered')
        if (socket == null) return
        socket.on('change-leds', ({data}) => {
            console.log('change led gets triggered')
            console.log(data)
            setLed(data)
        })

        //return () => socket.off('change-leds')
    }, [socket, setLed])
   

    return (
        <div>
            <section className="section-home">

                <QRR></QRR>
                <SlidesR></SlidesR>
                <div className="bg-image-container">

                    <img className='bg-image' src="/UI/fridge-home-rotated.jpg" alt="fridge with cadburry chocolates in it" />


                </div>

               
            </section>
        </div>
    )
}

export default HomeR
