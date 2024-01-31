import './LoadingPage.css'
import surfStronaut from '../../assets/icons/surfStronautIcon.png'

const LoadingPage = () => {
  return (
    <div className='loadingPageContainer'>
      <img
        className='loadingImage'
        src={surfStronaut}
        alt='surfing astronaut'
      />
      <h1>LOADING</h1>
    </div>
  )
}

export default LoadingPage
