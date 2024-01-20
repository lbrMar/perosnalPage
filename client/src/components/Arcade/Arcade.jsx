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
        <Outlet />
      </div>
    </div>
  )
}

export default Arcade
