import styles from './Landing.module.css'
/***************************** import components *****************************/
import AsciiArt from './AsciiArt/AsciiArt'
import InfoFetch from './InfoFetch/InfoFetch'

function Landing() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.displayContainer}>
        <AsciiArt />
        <InfoFetch />
      </div>
    </div>
  )
}

export default Landing
