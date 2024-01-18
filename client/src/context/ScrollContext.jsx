import { createContext, useContext, useState } from 'react'

const ScrollContext = createContext()

const useScrollContext = () => {
  return useContext(ScrollContext)
}

const ScrollProvider = ({ children }) => {
  const [scrollInfo, setScrollInfo] = useState({
    allowScrollHandling: false,
    scrollPosition: 0,
    scrollSection: 0,
    scrollDirection: null,
    visibleScrollDown: true,
    visibleScrollHome: false,
  })

  const updateScrollInfo = (newScrollInfo) => {
    setScrollInfo((prevScrollInfo) => ({
      ...prevScrollInfo,
      ...newScrollInfo,
    }))
  }

  const disableScrollHandling = () => {
    updateScrollInfo({
      allowScrollHandling: false,
    })
  }

  const enableScrollHandling = () => {
    updateScrollInfo({
      allowScrollHandling: true,
    })
  }

  const showScrollDownBtn = (scrollPosition, sectionHeights, numOfSections) => {
    if (scrollPosition > sectionHeights[numOfSections - 2] + 10) {
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
    }}>
      { children }
    </ScrollContext.Provider>
  )
}

export { ScrollProvider, useScrollContext }
