import { useContext, createContext, useEffect, useState } from "react";
import io from 'socket.io-client';
const SocketContext = createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({children}) {
    const [socket, setSocket] = useState(null)


useEffect(() => {
    const newSocket = io(
        //'http://localhost:8000'
        'https://fridgeproject.herokuapp.com/'
    )

    setSocket(newSocket)

    return () => newSocket.close()
}, [])


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )

}