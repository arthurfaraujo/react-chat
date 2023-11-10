import { MessageIfc } from '../../interfaces/MessageIfc'

function Message({ message }: { message: MessageIfc }) {
  return (
    <div>
      <h3>{message.user}</h3>
      <p>{message.content}</p>
    </div>
  )
}

export default Message
