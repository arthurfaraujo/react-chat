import { MessageIfc } from '../../interfaces/MessageIfc'

function Message({ message }: { message: MessageIfc }) {
  return (
    <>
      <h3>{message.user}</h3>
      <p>{message.content}</p>
    </>
  )
}

export default Message
