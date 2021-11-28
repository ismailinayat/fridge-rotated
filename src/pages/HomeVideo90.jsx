//import { LedContext } from '../contexts/LedContext.js';
import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import QRR from '../components/QRR'

import {useSocket} from '../contexts/SocketProvider';
import audioTag from './audio.wav';
import ReactAudioPlayer from 'react-audio-player';

  
    
  
    


function HomeVideo90() {

    //const {setLed} = useContext(LedContext)
    const navigate = useNavigate()
    const socket = useSocket();


    useEffect(() => {
        if (socket == null) return
        socket.on('shop', ()=> {
            console.log('This came from joystick')
            navigate('/shop')
        })

        return () => socket.off('shop')
    }, [socket, navigate])
/*
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

    */

   


    return (
        <div className="video-container90">
            
            <ReactAudioPlayer src={audioTag} autoPlay/>
            <QRR></QRR>
            
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                  <source src="/home/fridgevideo.mp4" type="video/mp4"/>
                  Your browser is not supported!
                </video>
              </div>
        </div>
    )
}

export default HomeVideo90
/*<audio  src={audioTag} autoPlay controls></audio> */