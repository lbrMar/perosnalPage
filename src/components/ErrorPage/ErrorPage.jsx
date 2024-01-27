import './ErrorPage.css'
import errorIcon from '../../assets/icons/surfStronautIcon.png'
import { useRouteError } from 'react-router-dom'

function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='errorMainContainer'>
      <img
        className='errorImg'
        src={errorIcon}
        alt='Surfing Astronaut'
      />
      <p className='errorContent'>ERROR</p>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
