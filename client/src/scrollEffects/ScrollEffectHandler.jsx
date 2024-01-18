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
  } = useScrollContext()
  const {
    allowScrollHanding, 
    scrollPosition, 
    scrollDirection,
    scrollSection,
    visibleScrollDown,
    visibleScrollHome,
  } = scrollInfo

  const windowHeight = window.innerHeight
  const totalHeight = document.body.scrollHeight
  const numOfSections = Math.floor(totalHeight / windowHeight)
  const sectionHeights = []
  let tempHeight = 0
  for (let i = 0; i < numOfSections; i++) {
    sectionHeights[i] = tempHeight
    tempHeight += windowHeight
  }

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
