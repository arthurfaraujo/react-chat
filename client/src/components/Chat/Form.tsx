import { AiOutlineSend } from 'react-icons/ai'
import { useRef, useContext } from 'react'
import { SocketContext } from '../../contexts/Socket'
import { useNavigate } from 'react-router-dom'

function Form() {
  const { socket, user } = useContext(SocketContext)
  const contentRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const content = contentRef.current!.value.trim()

    contentRef.current!.value = ''

    if (!user) {
      alert('You must set a username')
      navigate('/join')
      return
    }

    if (!content) {
      return
    }

    socket.emit('message', {
      user,
      content
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={contentRef} />
      <button type="submit">
        <AiOutlineSend />
      </button>
    </form>
  )
}

export default Form
