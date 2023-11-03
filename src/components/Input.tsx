function Input({
  content,
  handleInput
}: {
  content: string
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void
}) {
  return <input type="text" value={content} onInput={handleInput} />
}

export default Input
