import './Arcade.css'
import {
  Outlet
} from 'react-router-dom'

function Arcade () {
  return (
    <div className='arcadeMainContainer'>
      <div className='arcadeDisplayContainer'>
        <Outlet />
      </div>
    </div>
  )
}

export default Arcade
