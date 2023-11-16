import Message from './Message'
import { MessageIfc } from '../../interfaces/MessageIfc'
import { useEffect, useContext, useState, useRef } from 'react'
import { SocketContext } from '../../contexts/Socket'

function Messages() {
  const [messages, setMessages] = useState<MessageIfc[]>([])
  const { socket } = useContext(SocketContext)
  const scrollDivRef = useRef<HTMLDivElement>(null)

  function scrollToBottom() {
    scrollDivRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    socket.on('receive_message', (message: MessageIfc) => {
      setMessages(messages => [...messages, message])
    })

    return () => {
      socket.off('receive_message')
    }
  }, [socket])

  return (
    <div className="messages">
      {messages.map((message, index) => {
        return <Message key={index} message={message} />
      })}
      <div ref={scrollDivRef}></div>
    </div>
  )
}

export default Messages
