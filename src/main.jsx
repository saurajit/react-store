import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Root from './components/Root'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'
import './index.css'

import { Provider } from 'react-redux'
import configureStore from './store/store'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users',
        element: <UserList />,
        index: true
      },
      {
        path: 'users/:id',
        element: <UserDetails />,
      },
      {
        path: 'posts',
        element: <PostList />,
      },
      {
        path: 'posts/:id',
        element: <PostDetails />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
