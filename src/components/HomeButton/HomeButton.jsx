import homeIcon from '../../assets/icons/icon-home.png'
import styles from './HomeButton.module.css'
import { useScrollContext } from '../../context'

function HomeButton () {
  const {
    scrollInfo,
    updateScrollInfo,
    disableScrollHandling,
    enableScrollHandling
  } = useScrollContext()
  const { visibleScrollHome } = scrollInfo

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
