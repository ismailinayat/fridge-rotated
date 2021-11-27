import React, { createContext, useState } from 'react';

export const LedContext = createContext();

const LedContextProvider = (props) => {
    const [led, setLed] = useState({
        led1: "This is LED 1",
        led2: "This is LED 2",
        led3: "This is LED 3",
        led4: "This is LED 4",
    });

    return (
    <LedContext.Provider value={{led, setLed}}>
        {props.children}
    </LedContext.Provider>
    )
}

export default LedContextProvider;