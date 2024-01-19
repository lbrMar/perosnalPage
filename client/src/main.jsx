import '../styles/main.module.css'

/************************** import react functions **************************/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

/***************************** import components *****************************/
import { ScrollProvider } from './context'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import PokemonGame from './components/Arcade/PokemonGame/PokemonGame.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'arcade/pokemongame',
        element: <PokemonGame />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  </React.StrictMode>,
)
