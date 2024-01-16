import { useState, useEffect } from 'react'

function ScrollSlowOnHeight() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [currentSection, setCurrentSection] = useState(0)

  const scrollOffset = 100

  const sectionHeights = [
    0,
    window.innerHeight,
    window.innerHeight * 2,
    window.innerHeight * 3,
  ]

  const determineCurrentSection = () => {
    const scrollHeight = window.scrollY

    for (let i = 0; i < sectionHeights.length - 1; i++) {
      if (scrollHeight < sectionHeights[i + 1]) {
        return i
      }
    }

    return sectionHeights.length - 1
  }

  const scrollToNextSection = () => {
    const nextSection = (currentSection + 1) * window.innerHeight

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth',
    })
  }

  const scrollToPrevSection = () => {
    const prevSection = currentSection * window.innerHeight

    window.scrollTo({
      top: prevSection,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const newSection = determineCurrentSection()

      setCurrentSection(newSection)

      if (currentScrollPosition > scrollPosition) {
        setScrollDirection('down')
      } else if (currentScrollPosition < scrollPosition) {
        setScrollDirection('up')
      }

      setScrollPosition(currentScrollPosition)

      if (scrollDirection === 'down' 
        && currentScrollPosition >= sectionHeights[currentSection + 1] - scrollOffset) {
        scrollToNextSection()
      }

      if (scrollDirection === 'up' 
        && currentScrollPosition <= sectionHeights[currentSection] + scrollOffset) {
        scrollToPrevSection()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollDirection, scrollPosition, currentSection])

  return <div></div>
}

export default ScrollSlowOnHeight
