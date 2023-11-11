import { useContext } from 'react'
import { MessageIfc } from '../../interfaces/MessageIfc'
import { SocketContext } from '../../contexts/Socket'

function Message({ message }: { message: MessageIfc }) {
  const { user } = useContext(SocketContext)

  return (
    <div className={message.user === user ? 'myMessage' : 'message' }>
      <h3>{message.user}</h3>
      <p>{message.content}</p>
    </div>
  )
}

export default Message
