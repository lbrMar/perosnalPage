import { useState } from 'react'
import './Projects.css'
import chevronsRight from '../../../assets/icons/featherIcons/chevrons-right.svg'
import chevronsLeft from '../../../assets/icons/featherIcons/chevrons-left.svg'
import projectItems from './projectItems'

const Projects = () => {
  const [projectsSection, setProjectsSection] = useState(0)

  const paragraphs = projectItems[projectsSection].text.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))

  const nextImage = () => {
    setProjectsSection((prevIndex) => (prevIndex + 1) % projectItems.length)
  }

  const prevImage = () => {
    setProjectsSection((prevIndex) =>
      prevIndex === 0 ? projectItems.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='projectsMainContainer'>
      <img
        className='chevronBtn'
        onClick={prevImage}
        src={chevronsLeft}
        alt='LEFT'
      />
      <div className='projectItemContainer'>
        <a
          href={projectItems[projectsSection].link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='projectImage'
            src={projectItems[projectsSection].image}
            alt={`project ${projectsSection}`}
          />
        </a>
        <div>{paragraphs}</div>
      </div>
      <img
        className='chevronBtn'
        onClick={nextImage}
        src={chevronsRight}
        alt='RIGHT'
      />
    </div>
  )
}

export default Projects
