import styles from './Landing.module.css'
/***************************** import components *****************************/
import AsciiArt from './AsciiArt/AsciiArt'
import InfoFetch from './InfoFetch/InfoFetch'
import ScrollButton from '../ScrollButton/ScrollButton'

function Landing() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.displayContainer}>
        <AsciiArt />
        <InfoFetch />
      </div>
      <ScrollButton />
    </div>
  )
}

export default Landing
