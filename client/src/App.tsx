import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { SocketProvider } from './contexts/Socket'

function App() {
  return (
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  )
}

export default App
