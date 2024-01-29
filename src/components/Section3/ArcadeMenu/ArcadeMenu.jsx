import { useState } from 'react'
import './ArcadeMenu.css'
import { Link } from 'react-router-dom'

const ArcadeMenu = () => {
  const [menuDisplay, setMenuDisplay] = useState('menu')

  const onMenuClick = () => {
    setMenuDisplay('menu')
  }

  const onScoresClick = () => {
    setMenuDisplay('scores')
  }

  return (
    <div className='arcadeMenuMainContainer'>
      <div className='arcadeMenuTitleContainer'>
        <h1 onClick={onMenuClick}>MENU</h1>
        <h2>|</h2>
        <h1 onClick={onScoresClick}>HIGH SCORES</h1>
      </div>
      {menuDisplay === 'menu'
        ? (
          <div>Menu</div>
          )
        : (
          <div>scores</div>
          )}
    </div>
  )
}

export default ArcadeMenu
