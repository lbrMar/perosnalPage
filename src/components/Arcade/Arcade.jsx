import './Arcade.css'
import ScrollButton from '../ScrollButton/ScrollButton'
import {
  Outlet
} from 'react-router-dom'

function Arcade () {
  return (
    <div className='arcadeMainContainer'>
      <div className='arcadeBgImgContainer'>
        <div className='arcadeDisplayContainer'>
          <Outlet />
        </div>
        <ScrollButton />
      </div>
    </div>
  )
}

export default Arcade
