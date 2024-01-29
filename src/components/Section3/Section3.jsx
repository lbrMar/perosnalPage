import './Section3.css'
import { Outlet } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className='section3MainContainer'>
      <div className='arcadeDisplayContainer'>
        <Outlet />
      </div>
    </div>
  )
}

export default Section3
