import express from 'express'
import { Server, Socket } from 'socket.io'
import 'dotenv/config'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL
    : `http://localhost:5173`

const app = express()

let usersConnected: { socketId: string }[] = []

app.use(cors({ origin: '*' }))

app.get('/api/users', (req, res) => {
  res.json({ usersConnected })
})

const io = new Server(
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  }),
  { cors: { origin: '*' } }
)

io.on('connection', socket => {
  console.log('a user connected', socket.id)
  
  usersConnected = Array.from(io.sockets.sockets).map(socket => {
    return {
      socketId: socket[0],
      socketName: socket[1].data.username
    }
  })

  console.log(usersConnected)

  socket.on('disconnect', reason => {
    console.log('user disconnected', socket.id, reason)
  })

  socket.on('setUser', username => {
    socket.data.username = username
    console.log('username', socket.data.username)
  })

  socket.on('message', ({ user, content }) => {
    console.log('message', user, content)
    io.emit('receive_message', {
      user,
      content,
      time: new Date().toTimeString()
    })
  })

  socket.on('private message', ({ sender, chatId, content }) => {
    socket
      .to(chatId)
      .emit('private message', { sender, senderId: socket.id, content })
  })
})
