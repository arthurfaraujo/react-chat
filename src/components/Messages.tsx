import Message from './Message'

function Messages({ messages }: { messages: string[] }) {
  return (
    <div>
      {messages.map((message, index) => {
        return <Message key={index} message={message} />
      })}
    </div>
  )
}

export default Messages
