import { useState } from 'react'
import LogoComponent from './../LogoComponent'
import ButtonNav from './ButtonNav'
import Navbar from './Navbar'
import ButtonLink from '../ButtonLink'
import './Header.css'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  const mediaWatcher = window.matchMedia('(max-width: 40rem)')

  mediaWatcher.addEventListener('change', (e) => {
    if (!e.matches) setIsVisible(false)
  })

  return (
    <header className='container'>
      <div className='nav-wrapper'>
        <LogoComponent />
        <ButtonNav handleVisible={setIsVisible} visible={isVisible} />
        <Navbar visible={isVisible} />
        <div className='container-buttons | display-sm-one display-md-inline-flex'>
          <ButtonLink href='Login'>Login</ButtonLink>
          <ButtonLink href second='Register'>
            Register
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

export default Header
