import styles from './LoadingPage.module.css'

function LoadingPage () {
  return (
    <div className={styles.loadingContainer}>
      <img
        className={styles.loadingImg}
        src='../../assets/icons/surfStronautIcon.png'
        alt='Surfing Astronaut'
      />
      <p className={styles.loadingText}>LOADING</p>
    </div>
  )
}

export default LoadingPage
