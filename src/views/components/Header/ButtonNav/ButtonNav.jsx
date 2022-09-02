import './ButtonNav.css'

const ButtonNav = ({ handleVisible, visible }) => {
  const handleClick = () => {
    handleVisible(prev => !prev)
  }

  return (
    <div className='mobile-nav-toggle' aria-expanded={visible} onClick={handleClick}>
      <span />
      <span />
      <span />
      <span className='visually-hidden'>Menu</span>
    </div>
  )
}

export default ButtonNav
