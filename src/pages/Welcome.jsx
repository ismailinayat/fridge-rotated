import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

import {useSocket} from '../contexts/SocketProvider';




export default function Welcome(props) {

  const navigate = useNavigate()


  const socket = useSocket();
  
  console.log(socket)

  useEffect(() => {
    if (socket == null) return
    socket.emit('welcome')

  })

  useEffect(() => {

    if (socket == null) return

    socket.on('game', ()=> {

      //window.location = 'https://fridge-sigma.vercel.app/game'
      window.location = "http://localhost:3000/game"
  })
  return () => socket.off('game')
  }, [socket])

  useEffect(() => {
    if (socket == null) return
    socket.on('shop', ()=> {
      navigate('/shop-r')
  })
  return () => socket.off('shop')
  }, [socket, navigate])

  const handleGame = (e) => {
    console.log('game button is clicked')
    socket.emit('game')
    //window.location = 'https://fridge-sigma.vercel.app/game'
    window.location = "http://localhost:3000/game"
  }

  const handleShop = (e) => {
    socket.emit('shop')
    navigate('/joystick')
  }








  console.log(socket)
  return (

    <div className="header-container">
       <div className="bar top-bar">

        </div>

        <div className="logo">
          <img className="logo-img" src="/UI/Logo.png" alt="" />
        </div>

        <div className="welcome-heading">
          <h3>
            Select any one option
          </h3>
        </div>

        <header className='header'>

     
          <div className='header__left'>
            
            <div className="btn__container">
                <button className='btn btn__white' onClick={(e) => handleGame(e)}>
                  <img src="/UI/play-game.png" alt="play game" />
                </button>
            </div>

          </div>

          <div className='header__right' >
            <div className="btn__container">
            <button className='btn btn__white' onClick={(e) => handleShop(e)}>
            <img src="/UI/back.png" alt="play game" />
              </button>
            </div>
          </div>


        </header>

        <div className="bar bottom-bar">
  
      </div>
    </div>
   
  )
}


//<Link to='/game'><button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button></Link>