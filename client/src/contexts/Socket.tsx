import { createContext, ReactNode, useState } from 'react'
import { io } from 'socket.io-client'
import { SocketContextIfc } from '../interfaces/SocketContextIfc'

const server = import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'
const socket = io(server)

export const SocketContext = createContext<SocketContextIfc>(
  {} as SocketContextIfc
)

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const username = localStorage.getItem('user') || ''
  const [user, setUser] = useState(username)

  function updateUser(user: string) {
    localStorage.setItem('user', user)
    setUser(user)
    socket.emit('setUser', user)
  }

  return (
    <SocketContext.Provider value={{ socket, user, updateUser }}>
      {children}
    </SocketContext.Provider>
  )
}
