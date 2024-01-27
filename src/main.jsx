import '../styles/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import PokemonGame from './components/Arcade/PokemonGame/PokemonGame.jsx'
import GameMenu from './components/Arcade/GameMenu/GameMenu.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ScrollProvider } from './context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <GameMenu />
      },
      {
        path: 'arcade/pokemongame',
        element: <PokemonGame />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  </React.StrictMode>
)
