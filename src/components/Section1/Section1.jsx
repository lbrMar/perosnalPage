import './Section1.css'
import { useState } from 'react'
import Projects from './Projects/Projects'
import About from './About/About'

const Section1 = () => {
  const [personalMenuState, setPersonalMenuState] = useState('projects')

  const toggleProjectsMenu = () => {
    setPersonalMenuState('projects')
  }

  const toggleAboutMenu = () => {
    setPersonalMenuState('about')
  }

  return (
    <div className='section1MainContainer'>
      <div className='section1DisplayContainer'>
        <div className='listContainer'>
          <h3
            className={personalMenuState === 'projects' ? 'activeMenu' : ''}
            onClick={toggleProjectsMenu}
          >
            PROJECTS
          </h3>
          <h3
            className={personalMenuState === 'about' ? 'activeMenu' : ''}
            onClick={toggleAboutMenu}
          >
            ABOUT
          </h3>
        </div>
        <div className='personalDetailsContainer'>
          {personalMenuState === 'projects'
            ? (
              <Projects />
              )
            : (
              <About />
              )}
        </div>
      </div>
    </div>
  )
}

export default Section1
