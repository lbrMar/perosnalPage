import './ErrorPage.css'
import surfStronaut from '../../assets/icons/surfStronautIcon.png'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='errorPageContainer'>
      <img
        className='errorImage'
        src={surfStronaut}
        alt='surfing astronaut'
      />
      <h1>ERROR</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
