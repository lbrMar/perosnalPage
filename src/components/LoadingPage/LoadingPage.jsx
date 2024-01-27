import './LoadingPage.css'
import loadingIcon from '../../assets/icons/surfStronautIcon.png'

function LoadingPage () {
  return (
    <div className='loadingMainContainer'>
      <img
        className='loadingImg'
        src={loadingIcon}
        alt='Surfing Astronaut'
      />
      <p className='loadingContent'>LOADING</p>
    </div>
  )
}

export default LoadingPage
