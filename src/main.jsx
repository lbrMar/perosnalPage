import './index.css'
import './themes/rosePine.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {
  ScrollProvider,
  WindowProvider
} from './context'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ArcadeMenu from './components/Section3/ArcadeMenu/ArcadeMenu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ArcadeMenu />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowProvider>
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </WindowProvider>
  </React.StrictMode>
)
