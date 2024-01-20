import { Link } from 'react-router-dom'
import styles from './GameMenu.module.css'

function GameMenu() {

  return (
    <div className={styles.menuContainer}>
      <div className={styles.titleContainer}>
        <h3 className={styles.menuTitle}>Game@Menu</h3>
        <h3>|</h3>
        <h3 className={styles.menuTitle}>High@Scores</h3>
      </div>
      <Link 
        className={styles.linkStyle}
        to={`arcade/pokemongame`}
      >
        <div className={styles.linkContainer}>
          Pokemon Game
        </div>
      </Link>
      <Link 
        className={styles.linkStyle}
        to={`arcade/pokemongame`}
      >
        <div className={styles.linkContainer}>
          Pokemon Game
        </div>
      </Link>
      <Link 
        className={styles.linkStyle}
        to={`arcade/pokemongame`}
      >
        <div className={styles.linkContainer}>
          Pokemon Game
        </div>
      </Link>
      <Link 
        className={styles.linkStyle}
        to={`arcade/pokemongame`}
      >
        <div className={styles.linkContainer}>
          Pokemon Game
        </div>
      </Link>
      <Link 
        className={styles.linkStyle}
        to={`arcade/pokemongame`}
      >
        <div className={styles.linkContainer}>
          Pokemon Game
        </div>
      </Link>
    </div>
  )
}

export default GameMenu
