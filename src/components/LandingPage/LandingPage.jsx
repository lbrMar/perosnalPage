import './LandingPage.css'
import asciiArt from '../../assets/landingImages/asciiArt'
import jsIcon from '../../assets/icons/codingIcons/js.svg'
import reactIcon from '../../assets/icons/codingIcons/react.svg'
import nodeIcon from '../../assets/icons/codingIcons/node.svg'
import mongoIcon from '../../assets/icons/codingIcons/mongo.png'
import luaIcon from '../../assets/icons/codingIcons/lua.png'
import rosePinePalette from '../../assets/icons/codingIcons/rosePinePalette.png'
import rosePineDawnPalette from '../../assets/icons/codingIcons/rosePineDawnPalette.png'
import { useDisplayMode } from '../../context'

const LandingPage = () => {
  const { displayMode } = useDisplayMode()

  const asciiArtFormatted = asciiArt.split('\n').map((line) => (
    <pre>{line}</pre>
  ))

  return (
    <div className='landingPageContainer'>
      <div className='landingDisplayContainer'>
        <div>{asciiArtFormatted}</div>
        <div className='landingTextContainer'>
          <h4 className='landingTextMain'>lukas@myahl</h4>
          <p className='landingTextMain'>-----------</p>
          <div className='landingTextSection'>
            <h4 className='landingTextMain'>skills: </h4>
            <img className='landingIcon' src={jsIcon} />
            <img className='landingIcon' src={reactIcon} />
            <img className='landingIcon' src={nodeIcon} />
            <img className='landingIcon' src={mongoIcon} />
            <img className='landingIcon' src={luaIcon} />
          </div>
          <div className='landingTextSection'>
            <h4 className='landingTextMain'>University: </h4>
            <h5 className='landingTextSub'>French Major</h5>
          </div>
          <div className='landingTextSection'>
            <h4 className='landingTextMain'>distro: </h4>
            <h5 className='landingTextSub'>arch</h5>
          </div>
          <div className='landingTextSection'>
            <h4 className='landingTextMain'>theme: </h4>
            <h5 className='landingTextSub'>rose-pine</h5>
          </div>
          <div className='paletteDisplay'>
            {displayMode === 'light'
              ? (
                <img
                  className='paletteIcon'
                  src={rosePineDawnPalette}
                  alt='rose pine dawn palette'
                />
                )
              : (
                <img
                  className='paletteIcon'
                  src={rosePinePalette}
                  alt='rose pine palette'
                />
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
