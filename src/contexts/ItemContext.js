import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const [item, setItem] = useState({id : 1,
        name : 'Cadbury Golden Biscuit Crunch',
        img : '1.jpg',
        price : 'INR 450'});

    return (
    <ItemContext.Provider value={{item, setItem}}>
        {props.children}
    </ItemContext.Provider>
    )
}

export default ItemContextProvider;