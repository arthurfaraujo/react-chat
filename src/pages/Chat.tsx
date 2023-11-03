import InputForm from '../components/InputForm'
import Messages from '../components/Messages'
import { useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState<string[]>([])

  function addMessage(message: string) {
    setMessages(messages => [...messages, message])
  }

  return (
    <div>
      <h1>Chat</h1>
      <InputForm addMessage={addMessage} />
      <Messages messages={messages} />
    </div>
  )
}

export default Chat
