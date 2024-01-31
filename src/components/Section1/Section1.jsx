import './Section1.css'
import { useState } from 'react'
import Projects from './Projects/Projects'
import About from './About/About'
import listIcon from '../../assets/icons/featherIcons/list.svg'
import { useWindowContext } from '../../context'

const Section1 = () => {
  const [personalMenuState, setPersonalMenuState] = useState('projects')
  const [showMenuList, setShowMenuList] = useState(false)
  const { innerWidth } = useWindowContext()

  const toggleProjectsMenu = () => {
    setPersonalMenuState('projects')
  }

  const toggleAboutMenu = () => {
    setPersonalMenuState('about')
  }

  const onListClick = () => {
    setShowMenuList((prev) => !prev)
  }

  return (
    <div className='section1MainContainer'>
      <div className='section1DisplayContainer'>
        {innerWidth > 600
          ? (
            <div className='listContainer'>
              <h3
                className={personalMenuState === 'projects'
                  ? 'activeMenu projectMenuItem'
                  : 'projectMenuItem'}
                onClick={toggleProjectsMenu}
              >
                PROJECTS
              </h3>
              <h3
                className={personalMenuState === 'about'
                  ? 'activeMenu projectMenuItem'
                  : 'projectMenuItem'}
                onClick={toggleAboutMenu}
              >
                ABOUT
              </h3>
            </div>
            )
          : (
            <img
              className='listIcon'
              onClick={onListClick}
              src={listIcon}
              alt='List'
            />
            )}
        {showMenuList === false
          ? (
            <div className='personalDetailsContainer'>
              {personalMenuState === 'projects'
                ? (
                  <Projects />
                  )
                : (
                  <About />
                  )}
            </div>
            )
          : (
            <p>test</p>
            )}
      </div>
    </div>
  )
}

export default Section1
