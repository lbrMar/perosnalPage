import './About.css'
import loremIpsum from '../../../utils/loremipsum'

const About = () => {
  return (
    <div className='aboutMainContainer'>
      <p>{loremIpsum}</p>
    </div>
  )
}

export default About
