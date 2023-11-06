import { createContext, ReactNode, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { SocketContextIfc } from '../interfaces/SocketContextIfc'

const server = import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'
console.log(server)

export const SocketContext = createContext<SocketContextIfc>(
  {} as SocketContextIfc
)

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const username = localStorage.getItem('user') || ''
  const [user, setUser] = useState(username)
  const [socket, setSocket] = useState<Socket>(io(server))

  useEffect(() => {
    const newSocket = io(server)

    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [user])

  function updateUser(user: string) {
    localStorage.setItem('user', user)
    setUser(user)
  }

  return (
    <SocketContext.Provider value={{ socket, user, updateUser }}>
      {children}
    </SocketContext.Provider>
  )
}
