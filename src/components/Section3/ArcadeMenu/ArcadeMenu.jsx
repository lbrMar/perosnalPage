import './ArcadeMenu.css'
import { useState } from 'react'
import { useArcadeContext } from '../../../context'
import { Link } from 'react-router-dom'

const ArcadeMenu = () => {
  const [menuDisplay, setMenuDisplay] = useState('menu')
  const { arcadeGames, highScores } = useArcadeContext()

  const onMenuClick = () => {
    setMenuDisplay('menu')
  }

  const onScoresClick = () => {
    setMenuDisplay('scores')
  }

  return (
    <div className='arcadeMenuMainContainer'>
      <div className='arcadeMenuTitleContainer'>
        <div className='menuTitle'>
          <h1 onClick={onMenuClick}>MENU</h1>
        </div>
        <h2>|</h2>
        <div className='scoresTitle'>
          <h1 onClick={onScoresClick}>HIGH SCORES</h1>
        </div>
      </div>
      <div>
        {menuDisplay === 'menu'
          ? (
              arcadeGames.map((game) => (
                <Link
                  className='gameLink'
                  key={game}
                  to={`/${game}`}
                >
                  <h2>{game}</h2>
                </Link>
              ))
            )
          : (
              arcadeGames.map((game) => (
                <h2 key={game}>{game}: {highScores[game]}</h2>
              ))
            )}
      </div>
    </div>
  )
}

export default ArcadeMenu
