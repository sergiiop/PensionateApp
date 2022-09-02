import LogoComponent from '../LogoComponent'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer--logo-social'>
          <LogoComponent />
          <ul className='social-list' role='list' aria-label='Social links'>
            <li>
              <a aria-label='facebook' href='#'>
                <img src='' alt='' />
              </a>
            </li>
            <li>
              <a aria-label='instagram' href='#'>
                <img src='' alt='' />
              </a>
            </li>
            <li>
              <a aria-label='whatsapp' href='#'>
                <img src='' alt='' />
              </a>
            </li>
          </ul>
        </div>
        <div class='primary-footer-nav'>
          <nav class='footer-nav'>
            <ul
              aria-label='Footer'
              role='list'
            >
              <li><a href='#'>Inicio</a></li>
              <li><a href='#'>Acerca de nosotros</a></li>
              <li><a href='#'>Politica de Privacidad</a></li>
              <li><a href='#'>Terminos y Condiciones</a></li>
            </ul>
          </nav>
        </div>
        <div class='primary-footer-form'>
          <p>Copyright 2022. All Rights Reserved</p>
          <p>HW PENSIONES es propiedad de HWPENSIONES</p>
          <p>Diseñado y Desarrollado por JSDesignCreation</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
