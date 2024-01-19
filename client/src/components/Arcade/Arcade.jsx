import styles from './Arcade.module.css'
import GameMenu from './GameMenu/GameMenu'

function Arcade() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.displayContainer}>
        <GameMenu />
        <div className={styles.gameContainer}>
        </div>
      </div>
    </div>
  )
}

export default Arcade
