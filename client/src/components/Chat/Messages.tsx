import Message from './Message'
import { MessageIfc } from '../../interfaces/MessageIfc'
import { useEffect, useContext, useState } from 'react'
import { SocketContext } from '../../contexts/Socket'

function Messages() {
  const [messages, setMessages] = useState<MessageIfc[]>([])
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.on('receive_message', (message: MessageIfc) => {
      setMessages(messages => {
        return [...messages, message]
      })
    })

    return () => {
      socket.off('receive_message')
    }
  }, [socket])

  return (
    <div>
      {messages.map((message, index) => {
        console.log(message, index)
        return <Message key={index} message={message} />
      })}
    </div>
  )
}

export default Messages
