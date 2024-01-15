import styles from './LoadingPage.module.css'

function LoadingPage() {

  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loadingImg} 
        src='../../../../dist/images/loadingPageSurfstronaut.png' 
        alt='Surfing Astronaut' />
    </div>
  )
}

export default LoadingPage
