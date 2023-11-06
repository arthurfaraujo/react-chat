import express from 'express'
import { Server } from 'socket.io'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL
    : `http://localhost:5173`

const app = express()
const io = new Server(app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
}), { cors: { origin: '*' } })

io.on('connection', socket => {
  console.log('a user connected', socket.id)

  socket.on('disconnect', reason => {
    console.log('user disconnected', socket.id, reason)
  })

  socket.on('setUser', username => {
    socket.data.username = username
    console.log('username', socket.data.username)
  })

  socket.on('message', ({ user, content }) => {
    console.log('message', user, content)
    io.emit('receive_message', { user, content, authorId: socket.id })
  })
})
