import { io } from './reactChat'


export let usersConnected: { socketId: string }[] = []

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
    console.log(usersConnected)
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
