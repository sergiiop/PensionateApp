import { useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = ({ visible }) => {
  const navbar = useRef(null)

  useEffect(() => {
    navbar.current.toggleAttribute('data-visible')
  }, [visible])
  return (
    <nav ref={navbar} className='primary-navigation' id='primary-navigation'>
      <ul aria-label='Primary' role='list' className='nav-list'>
        <li>
          <a href='#about'>Nosotros</a>
        </li>
        <li>
          <a href='#'>Pensiones</a>
        </li>
        <li>
          <a href='#'>Inmuebles</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
