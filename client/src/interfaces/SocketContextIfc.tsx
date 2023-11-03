import { Socket } from 'socket.io-client'

export interface SocketContextIfc {
  user: string
  socket: Socket
  updateUser: (user: string) => void
}
