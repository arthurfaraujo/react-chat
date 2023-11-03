import Form from '../components/Chat/Form'
import Messages from '../components/Chat/Messages'
import { useContext } from 'react'
import { SocketContext } from '../contexts/Socket'

function Chat() {
  const { user } = useContext(SocketContext)

  return (
    <div>
      <h1>Chat</h1>
      <h3>User: {user}</h3>
      <Form />
      <Messages />
    </div>
  )
}

export default Chat
