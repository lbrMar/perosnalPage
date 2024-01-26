import homeIcon from '../../../dist/assets/icons8-home-64.png'
import styles from './HomeButton.module.css'
import { useScrollContext } from '../../context'

function HomeButton () {
  const {
    scrollInfo,
    updateScrollInfo,
    disableScrollHandling,
    enableScrollHandling
  } = useScrollContext()
  const { visibleScrollHome, scrollDirection } = scrollInfo

  const scrollToHome = () => {
    updateScrollInfo({ scrollDirection: 'up' })

    disableScrollHandling()

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    enableScrollHandling()
  }

  return (
    <div>
      {visibleScrollHome && (
        <div onClick={scrollToHome}>
          <img
            className={styles.homeButton}
            src={homeIcon}
            alt='HOME'
          />
        </div>
      )}
    </div>
  )
}

export default HomeButton
