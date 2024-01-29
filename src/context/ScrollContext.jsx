// ScrollContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'

// Create the context
const ScrollContext = createContext()

const useScrollContext = () => {
  return useContext(ScrollContext)
}

// Create a provider component
const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)

  // Update scrollY when the page is scrolled
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollProvider, useScrollContext }
