import React, { createContext, useState } from 'react';

export const RotateContext = createContext();

const RotateContextProvider = (props) => {
    const [rotate, setRotate] = useState(90);

    return (
    <RotateContext.Provider value={{rotate, setRotate}}>
        {props.children}
    </RotateContext.Provider>
    )
}

export default RotateContextProvider;