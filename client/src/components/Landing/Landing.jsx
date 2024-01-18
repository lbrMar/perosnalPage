import styles from './Landing.module.css'
/***************************** import components *****************************/
import AsciiArt from './AsciiArt/AsciiArt'
import AsciiArtMobile from './AsciiArt/AsciiArtMobile'
import InfoFetch from './InfoFetch/InfoFetch'
import ScrollButton from '../ScrollButton/ScrollButton'

import { useEffect, useState } from 'react'

function Landing() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.pageContainer}>
      <div className={styles.displayContainer}>
        {windowWidth > 600 ? (
        <AsciiArt />
        ) : (
        <AsciiArtMobile />
        )}
        <InfoFetch />
      </div>
      <ScrollButton />
    </div>
  )
}

export default Landing
