import {useNavigate} from 'react-router-dom'
import Form from '../components/Chat/Form'
import Messages from '../components/Chat/Messages'
import { useContext, useEffect } from 'react'
import { SocketContext } from '../contexts/Socket'

function Chat() {
  const { user } = useContext(SocketContext)
  const navigate = useNavigate()

  useEffect(() => {
    !user && navigate('/join')
  })

  return (
    <div className='chat'>
      {/* <h1>Chat</h1> */}
      <Messages />
      <Form />
    </div>
  )
}

export default Chat
