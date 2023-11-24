import { AiOutlineSend } from 'react-icons/ai'
import { useRef, useContext } from 'react'
import { SocketContext } from '../../contexts/Socket'

function Form({ chatId }: {chatId: string}) {
  const { socket, user } = useContext(SocketContext)
  const contentRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const content = contentRef.current!.value.trim()

    contentRef.current!.value = ''

    if (!content) {
      return
    }

    socket.emit('private message', {sender: user, chatId, content})
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
