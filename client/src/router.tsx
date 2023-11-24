import { createBrowserRouter } from 'react-router-dom'
import Join from './pages/Join'
import ChatPage from './pages/Chat'
import Home from './pages/Home'
import Layout from './pages/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'join',
        element: <Join />
      },
      {
        path: 'chat',
        element: <ChatPage />
      }
    ]
  }
])
