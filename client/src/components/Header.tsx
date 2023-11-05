import { Link } from 'react-router-dom'
import SignoutButton from './Signout'
import { SocketContext } from '../contexts/Socket'
import { useContext } from 'react'

function Header() {
  const { user } = useContext(SocketContext)

  return (
    <header>
      <Link to={'/'}>React Chat</Link>
      <nav>
        {user && <span>{user}</span>}
        <Link to={'/join'}>Join</Link>
        <Link to={'/chat'}>Chat</Link>
        <SignoutButton />
      </nav>
    </header>
  )
}

export default Header
