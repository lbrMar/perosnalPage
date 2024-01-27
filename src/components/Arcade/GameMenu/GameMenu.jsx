import { Link } from 'react-router-dom'

function GameMenu () {
  return (
    <div className='gameMenuContainer'>
      <div className='gameMenuTitleContainer'>
        <div className='gameMenuTitleBtn'>
          <h3 className='gameMenuTitle'>Game@Menu</h3>
        </div>
        <h3>|</h3>
        <div className='gameMenuTitleBtn'>
          <h3 className='gameMenuTitle'>High@Scores</h3>
        </div>
      </div>
      <Link
        className='gameLinkContainer'
        to='arcade/pokemongame'
      >
        <div className='gameLinkText'>
          Pokemon Game
        </div>
      </Link>
    </div>
  )
}

export default GameMenu
