import LogoComponent from './../LogoComponent'
import ButtonNav from './ButtonNav'
import Navbar from './Navbar'
import './Header.css'
import { useState } from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  console.log(isVisible)
  return (
    <header className='primary-header'>
      <div className='container'>
        <div className='nav-wrapper'>
          <LogoComponent />
          <ButtonNav handleVisible={setIsVisible} visible={isVisible} />
          <Navbar visible={isVisible} />
          <div className='container-buttons | display-sm-one display-md-inline-flex'>
            <a href='Login'>Login</a>
            <a href='Register'>Register</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
