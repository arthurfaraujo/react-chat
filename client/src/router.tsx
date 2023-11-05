import { createBrowserRouter, redirect } from 'react-router-dom'
import Join from './pages/Join'
import Chat from './pages/Chat'
import Main from './pages/Main'
import Layout from './pages/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'join',
        element: <Join />
      },
      {
        path: 'chat',
        element: <Chat />
      }
    ]
  }
])
