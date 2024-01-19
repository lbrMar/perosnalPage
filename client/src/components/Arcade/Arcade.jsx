import styles from './Arcade.module.css'
import GameMenu from './GameMenu/GameMenu'
import { 
  Outlet,
  useNavigation,
} from 'react-router-dom'

function Arcade() {
  const navigation = useNavigation()

  return (
    <div className={styles.pageContainer}>
      <div className={styles.displayContainer}>
        <GameMenu />
        <div className={styles.gameContainer}>
          <div>
            {navigation.state === 'loading' ? (
              <span class="loader"></span>
            ) : (
            <Outlet />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arcade
