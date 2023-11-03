import { createBrowserRouter, redirect } from 'react-router-dom'
import Join from './pages/Join'
import Chat from './pages/Chat'

export const router = createBrowserRouter([{
  path: '/',
  children: [
    {
      index: true,
      loader: () => redirect('/join')
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
}])