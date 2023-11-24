import express from 'express'
import { Server } from 'socket.io'
import 'dotenv/config'
import cors from 'cors'
import { usersConnected } from './socketServer'

const PORT = process.env.PORT || 3000

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL
    : `http://localhost:5173`

const app = express()

app.use(cors({ origin: '*' }))

app.get('/api/users', (req, res) => {
  res.json({ usersConnected })
})

export const io = new Server(
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  }),
  { cors: { origin: '*' } }
)
