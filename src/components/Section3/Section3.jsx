import './Section3.css'
import {
  ArcadeProvider,
  PokeGameProvider
} from '../../context'
import { Outlet } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className='section3MainContainer'>
      <div className='arcadeDisplayContainer'>
        <ArcadeProvider>
          <PokeGameProvider>
            <Outlet />
          </PokeGameProvider>
        </ArcadeProvider>
      </div>
    </div>
  )
}

export default Section3
