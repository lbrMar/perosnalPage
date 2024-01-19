import { Link } from 'react-router-dom'
import styles from './GameMenu.module.css'

function GameMenu() {

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Game@Menu</h3>
      <p>---------------</p>
      <p><Link to={`arcade/pokemongame`}>Pokemon Game</Link></p>
    </div>
  )
}

export default GameMenu
