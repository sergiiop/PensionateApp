import LogoComponent from './../LogoComponent'
import ButtonNav from './ButtonNav'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
  return (
    <header className='primary-header'>
      <div className='container'>
        <div className='nav-wrapper'>
          <LogoComponent />
          <ButtonNav />
          <Navbar />
          <div className='container-buttons flex'>
            <a href='Login'>Login</a>
            <a href='Register'>Register</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
