import { useNavigate } from 'react-router-dom'
import Chat from '../components/Chat/Chat'
import List from '../components/Chat/List'
import { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../contexts/Socket'

function ChatPage() {
  const { user } = useContext(SocketContext)
  const [chatId, setChatId] = useState('')
  const navigate = useNavigate()

  function handleClick(newChatId: string) {
    setChatId(newChatId)
  }

  useEffect(() => {
    !user && navigate('/join')
  })

  return (
    <div className="content">
      <List handleClick={handleClick} />
      <div className="chat">
        <Chat chatId={chatId} />
      </div>
    </div>
  )
}

export default ChatPage
