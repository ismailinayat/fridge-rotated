import React, {useContext} from 'react'
import { LedContext } from '../contexts/LedContext.js';
import SlideR from './SlideR'


function SlidesR() {

    const {led} = useContext(LedContext)

    const {led1, led2, led3, led4} = led;




    return (
        <div className="slides__container-r">
  

                <div className="slide-1">

                    <SlideR text={led1}></SlideR>
                </div>

                <div className="slide-2">

                    <SlideR text={led2}></SlideR>
                </div>

                <div className="slide-3">

                    <SlideR text={led3}></SlideR>
                </div>

                <div className="slide-4">

                    <SlideR text={led4}></SlideR>
                </div>
               
 
            
        </div>
    )
}

export default SlidesR
