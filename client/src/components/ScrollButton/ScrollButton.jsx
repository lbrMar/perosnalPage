import downArrowIcon from '../../../dist/assets/icons8-double-down-64.png'
import styles from './ScrollButton.module.css'
import { useState, useEffect } from 'react'

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  const sectionHeights = [0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 2.3]

  const determineCurrentSection = () => {
    const scrollHeight = window.scrollY

    for (let i = 0; i < sectionHeights.length - 1; i++) {
      if (scrollHeight < sectionHeights[i + 1]) {
        return i
      }
    }

    return sectionHeights.length - 1
  }

  const scrollNextToSection = () => {
    const nextSection = (currentSection + 1) * window.innerHeight

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const newSection = determineCurrentSection()
      setCurrentSection(newSection)

      setIsVisible(newSection < sectionHeights.length - 1)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <div
          className={styles.scrollButton}
          onClick={scrollNextToSection}>
          <img 
            className={styles.icon}
            src={downArrowIcon} 
            alt='DOWN' />
        </div>
      )}
    </div>
  )
}

export default ScrollButton;
