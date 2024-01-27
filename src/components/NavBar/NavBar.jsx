import './NavBar.css'
import { useScrollContext } from '../../context'

function NavBar () {
  const {
    sectionHeights
  } = useScrollContext()

  const gitLink = '// git'

  const linkItems = [
    '// home',
    '// about',
    '// arcade',
    '// contact'
  ]

  const scrollOnLinkClick = (index) => {
    const nextSection = sectionHeights[index]

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth'
    })
  }

  return (
    <div className='navBarMainContainer'>
      <h2 className='titleItem'>@lbrm</h2>
      <div className='linksContainer'>
        {linkItems.map((item, index) => (
          <h3
            className='linkItem'
            key={index}
            onClick={() => scrollOnLinkClick(index)}
          >
            {item}
          </h3>
        ))}
        <h3 className='linkItem'>
          <a
            className='linkItem'
            href='https://github.com/lbrMar'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {gitLink}
          </a>
        </h3>
      </div>
    </div>
  )
}

export default NavBar
