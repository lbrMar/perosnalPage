import './About.css'
import loremIpsum from '../../../utils/loremipsum'

const About = () => {
  return (
    <div className='aboutMainContainer'>
      <div className='aboutTextContainer'>
        <p>{loremIpsum}</p>
      </div>
    </div>
  )
}

export default About
