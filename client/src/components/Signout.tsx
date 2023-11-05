import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../contexts/Socket'
import { useContext } from 'react'

function SignoutButton() {
  const { user, updateUser } = useContext(SocketContext)
  const navigate = useNavigate()

  function handleSignout() {
    updateUser('')
    navigate('/join')
  }

  return user ? <button onClick={handleSignout}>Signout</button> : null
}

export default SignoutButton
