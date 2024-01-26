import styles from './LoadingPage.module.css'
import loadingIcon from '../../assets/icons/astro-surf-loading.png'

function LoadingPage () {
  return (
    <div className={styles.loadingContainer}>
      <img
        className={styles.loadingImg}
        src={loadingIcon}
        alt='Surfing Astronaut'
      />
      <p className={styles.loadingText}>LOADING</p>
    </div>
  )
}

export default LoadingPage
