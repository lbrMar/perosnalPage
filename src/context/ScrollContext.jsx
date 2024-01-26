import { createContext, useContext, useState } from 'react'

const ScrollContext = createContext()

const useScrollContext = () => {
  return useContext(ScrollContext)
}

const ScrollProvider = ({ children }) => {
  const [scrollInfo, setScrollInfo] = useState({
    allowScrollHandling: true,
    scrollPosition: 0,
    scrollSection: 0,
    scrollDirection: null,
    visibleScrollDown: true,
    visibleScrollHome: false
  })

  const updateScrollInfo = (newScrollInfo) => {
    setScrollInfo((prevScrollInfo) => ({
      ...prevScrollInfo,
      ...newScrollInfo
    }))
  }

  const windowHeight = window.innerHeight
  const totalHeight = document.body.scrollHeight
  const numOfSections = Math.floor(totalHeight / windowHeight)
  const sectionHeights = []
  let tempHeight = 0
  for (let i = 0; i < numOfSections; i++) {
    sectionHeights[i] = tempHeight
    tempHeight += windowHeight
  }

  const disableScrollHandling = () => {
    setTimeout(() => {
      updateScrollInfo({
        allowScrollHandling: true
      })
    }, 2000)
  }

  const enableScrollHandling = () => {
    updateScrollInfo({
      allowScrollHandling: false
    })
  }

  const showScrollDownBtn = (scrollPosition, sectionHeights, numOfSections) => {
    if (scrollPosition > sectionHeights[numOfSections - 2] + 50) {
      return false
    }
    return true
  }

  const showScrollHomeBtn = (scrollPosition, sectionHeights, numOfSections) => {
    if (scrollPosition > sectionHeights[numOfSections - 1] - 10) {
      return true
    }
    return false
  }

  return (
    <ScrollContext.Provider value={{
      scrollInfo,
      updateScrollInfo,
      disableScrollHandling,
      enableScrollHandling,
      showScrollDownBtn,
      showScrollHomeBtn,
      sectionHeights,
      windowHeight,
      numOfSections
    }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollProvider, useScrollContext }
