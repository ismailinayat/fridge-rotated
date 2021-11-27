import React, {useContext} from 'react'
import { LedContext } from '../contexts/LedContext.js';
import Slide from './slide1'


function Slides() {

    const {led} = useContext(LedContext)

    const {led1, led2, led3, led4} = led;




    return (
        <div className="slides__container">
  

                <div className="slide-1">

                    <Slide text={led1}></Slide>
                </div>

                <div className="slide-2">

                    <Slide text={led2}></Slide>
                </div>

                <div className="slide-3">

                    <Slide text={led3}></Slide>
                </div>

                <div className="slide-4">

                    <Slide text={led4}></Slide>
                </div>
               
 
            
        </div>
    )
}

export default Slides
