import homeIcon from '../../../dist/assets/icons8-home-64.png'
import styles from './HomeButton.module.css'
import { useState, useEffect } from 'react'

function HomeButton() {
  const [isVisible, setIsVisible] = useState(false)

  const windowHeight = window.innerHeight

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > (windowHeight * 3) - 20) {
        setIsVisible(true)
      } else if (currentScrollY < windowHeight * 3) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      { isVisible && (
        <div onClick={scrollToHome}>
          <img 
            className={styles.homeButton}
            src={homeIcon}
            alt='HOME' />
        </div>
      )}
    </div>
  )
}

export default HomeButton
