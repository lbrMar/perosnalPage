import './index.css';
import './themes/rosePine.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import {
  ScrollProvider,
  WindowProvider,
  DisplayModeProvider
} from './context';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ArcadeMenu from './components/Section3/ArcadeMenu/ArcadeMenu.jsx';
import PokemonGame from './components/Section3/PokemonGame/PokemonGame.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ArcadeMenu />
      },
      {
        path: '/pokemonGame',
        element: <PokemonGame />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowProvider>
      <ScrollProvider>
        <DisplayModeProvider>
          <RouterProvider router={router} />
        </DisplayModeProvider>
      </ScrollProvider>
    </WindowProvider>
  </React.StrictMode>
);
