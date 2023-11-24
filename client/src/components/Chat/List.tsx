import { useEffect, useState, useContext } from 'react'
import { SocketContext } from '../../contexts/Socket'
const server = import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'

function List({ handleClick }: { handleClick: (chatId: string) => void }) {
  const {socket} = useContext(SocketContext)
  const [users, setUsers] = useState<{ socketId: string, socketName: string }[]>([])

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(`${server}/api/users`, { method: 'GET' })

      if (!res.ok) {
        console.log('deu ruim')
        return
      }
      const newUsers = await res.json()

      setUsers(newUsers.usersConnected)
    }

    fetchUsers()
  }, [])

  return (
    <div className="list">
      <h1>Chats</h1>
      <ul>
        {users.map((user, index) => {
          console.log(user)
          if (user.socketId !== socket.id) return (
            <li key={index} onClick={() => handleClick(user.socketId)}>
              <div className="info">
                <h2>{user.socketName}</h2>
                <p>Message</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
