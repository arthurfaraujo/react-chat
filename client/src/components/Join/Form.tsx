import { AiOutlineSend } from 'react-icons/ai'
import { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../../contexts/Socket'

function Form() {
  const { socket, user, updateUser } = useContext(SocketContext)
  const nameRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  if (user !== '') alert('You are already logged in')
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()


    const name = nameRef.current?.value || ''
    if (!name.trim()) {
      console.log('No name')
      return
    }

    socket.emit('setUser', name)
    updateUser(name)

    nameRef.current!.value = ''

    navigate('/chat')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{user}</p>
      <input ref={nameRef} />
      <button type="submit">
        <AiOutlineSend />
      </button>
    </form>
  )
}

export default Form
