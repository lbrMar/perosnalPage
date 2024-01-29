import './Section3.css'
import { ArcadeProvider } from '../../context'
import { Outlet } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className='section3MainContainer'>
      <div className='arcadeDisplayContainer'>
        <ArcadeProvider>
          <Outlet />
        </ArcadeProvider>
      </div>
    </div>
  )
}

export default Section3
