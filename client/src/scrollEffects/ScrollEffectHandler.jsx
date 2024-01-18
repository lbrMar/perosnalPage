import { useEffect } from 'react'
import { useScrollContext } from '../context'
import ScrollColorChange from './ScrollColorChange.js'
import ScrollSlowOnY from './ScrollSlowOnY.js'

function ScrollEffectHandler() {
  const {
    scrollInfo,
    updateScrollInfo,
    showScrollDownBtn,
    showScrollHomeBtn,
    sectionHeights,
    windowHeight,
    numOfSections,
  } = useScrollContext()
  const {
    allowScrollHanding, 
    scrollPosition, 
    scrollDirection,
    scrollSection,
    visibleScrollDown,
    visibleScrollHome,
  } = scrollInfo


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const currentDirection = 
        ScrollSlowOnY.determineSrollDirection(currentScrollPosition, scrollPosition)
      const currentScrollSection = 
        ScrollSlowOnY.determineCurrentSection(currentScrollPosition, sectionHeights)

      ScrollSlowOnY.goToSection(
        allowScrollHanding, 
        scrollDirection, 
        scrollPosition, 
        scrollSection, 
        sectionHeights,
        windowHeight
      )

      const isVisibleDownBtn = 
        showScrollDownBtn(scrollPosition, sectionHeights, numOfSections)

      const isVisibleHomeBtn = 
        showScrollHomeBtn(scrollPosition, sectionHeights, numOfSections)

      updateScrollInfo({ 
        scrollPosition: currentScrollPosition,
        scrollDirection: currentDirection,
        scrollSection: currentScrollSection,
        visibleScrollDown: isVisibleDownBtn,
        visibleScrollHome: isVisibleHomeBtn,
      })

      ScrollColorChange.determineBackgroundColor(scrollPosition)
    }    

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition, scrollDirection, scrollSection])


  return null
}

export default ScrollEffectHandler
