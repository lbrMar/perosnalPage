import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import LoadingPage from './components/LoadingPage/LoadingPage'
import Footer from './components/Footer/Footer'
import { useState, useEffect } from 'react'

function App () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(delay)
  }, [])

  return (
    <div className='appContainer'>
      {loading
        ? (
          <LoadingPage />
          )
        : (
          <>
            <LandingPage />
            <Section2 />
            <Section3 />
            <Footer />
          </>
          )}
    </div>
  )
}

export default App
