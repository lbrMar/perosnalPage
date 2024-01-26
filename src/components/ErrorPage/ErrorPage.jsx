import styles from './ErrorPage.module.css'
import { useRouteError } from 'react-router-dom'
import errorIcon from '../../assets/icons/astro-surf-loading.png'

function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={styles.errorContainer}>
      <img
        className={styles.errorImg}
        src={errorIcon}
        alt='Surfing Astronaut'
      />
      <p className={styles.errorText}>ERROR</p>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
