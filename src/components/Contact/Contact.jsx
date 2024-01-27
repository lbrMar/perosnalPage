import './Contact.css'
import HomeButton from '../HomeButton/HomeButton'

function Contact () {
  return (
    <>
      <div className='contactMainContainer'>
        <div className='contactBgImgContainer'>
          <div className='contactDisplayContainer' />
          <div className='contactFooterContainer'>
            <HomeButton />
            <p className='footerText'>@lbrm</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
