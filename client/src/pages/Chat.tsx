import { useNavigate } from 'react-router-dom'
import Form from '../components/Chat/Form'
import Messages from '../components/Chat/Messages'
import List from '../components/Chat/List'
import { useContext, useEffect } from 'react'
import { SocketContext } from '../contexts/Socket'

function Chat() {
  const { user } = useContext(SocketContext)
  const navigate = useNavigate()

  useEffect(() => {
    !user && navigate('/join')
  })

  return (
    <div className="content">
      <List />
      <div className="chat">
        <Messages />
        <Form />
      </div>
    </div>
  )
}

export default Chat
