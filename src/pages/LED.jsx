//import React, {useContext} from 'react'
//import { LedContext } from '../contexts/LedContext.js';
import useInputState from '../hooks/useInputState.js';
import {useSocket} from '../contexts/SocketProvider';
import {Link } from 'react-router-dom';

function LED() {

    const socket = useSocket();
    //const {setLed} = useContext(LedContext)

    const [led1, setLed1] = useInputState("");
    const [led2, setLed2] = useInputState("");
    const [led3, setLed3] = useInputState("");
    const [led4, setLed4] = useInputState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        socket.emit('change-leds', {data: {led1, led2, led3, led4}})
        
    }
    return (
        <div className='led-container'>

            <div className="btn-home"><Link to='/'>Home</Link></div>
            <div id='contact'>

      <section className="section-book">

        <div className="row">
          <div className="book">
            <div className="book__form">

              <form className="form" onSubmit = {(e) => handleFormSubmit(e)}>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="led1"
                    placeholder="Write Text for LED 1"
                    name="led1"
                    required
                    value={led1}
                    onChange={setLed1}

                  />
                  <label htmlFor="led1" className="form__label">
                    LED 1
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="led2"
                    placeholder="Write Text for LED 2"
                    required
                    name="led2"
                    value={led2}
                    onChange={setLed2}
                  />
                  <label htmlFor="led2" className="form__label">
                    LED 2
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="led3"
                    placeholder="Write Text for LED 3"
                    required
                    name="led3"
                    value={led3}
                    onChange={setLed3}
                  />
                  <label htmlFor="led3" className="form__label">
                  LED 3
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="led4"
                    placeholder="Write Text for LED 4"
                    required
                    name="led4"
                    value={led4}
                    onChange={setLed4}
                  />
                  <label htmlFor="led4" className="form__label">
                    LED 4
                  </label>
                </div>

                <button type='Submit' className="btn btn--green u-margin-top-medium">
                  CHANGE LED TEXT
                </button>
              </form>
            </div>

           
          </div>
        </div>
      </section>
    </div>
        </div>
    )
}

export default LED
