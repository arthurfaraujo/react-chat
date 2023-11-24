import Messages from './Messages'
import Form from './Form'

function Chat({ chatId }: { chatId: string }) {
  return (
    <>
      <Messages />
      <Form chatId={chatId} />
    </>
  )
}

export default Chat
