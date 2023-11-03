import { useState } from 'react'
import Input from './Input'
import SendButton from './SendButton'

function InputForm({ addMessage }: { addMessage: (message: string) => void }) {
  const [content, setContent] = useState<string>('')

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    setContent(e.currentTarget.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addMessage(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input content={content} handleInput={handleInput} />
      <SendButton />
    </form>
  )
}

export default InputForm
