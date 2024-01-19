import styles from './ErrorPage.module.css'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorContainer}>
      <img className={styles.errorImg} 
        src='../../../dist/images/loadingPageSurfstronaut.png' 
        alt='Surfing Astronaut' />
      <p className={styles.errorText}>ERROR</p>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
