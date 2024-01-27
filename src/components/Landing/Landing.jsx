import './Landing.css'
import AsciiArt from './AsciiArt/AsciiArt'
import AsciiArtMobile from './AsciiArt/AsciiArtMobile'
import LandingContent from './LandingContent/LandingContent'
import ScrollButton from '../ScrollButton/ScrollButton'

import { useEffect, useState } from 'react'

function Landing () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='landingMainContainer'>
      <div className='landingBgImgContainer'>
        <div className='landingDisplayContainer'>
          {windowWidth > 700
            ? (
              <AsciiArt />
              )
            : (
              <AsciiArtMobile />
              )}
          <LandingContent />
        </div>
        <ScrollButton />
      </div>
    </div>
  )
}

export default Landing
