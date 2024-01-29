import './ErrorPage.css'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='errorPageContainer'>
      <h1>ERROR</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
