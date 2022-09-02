import { useAssets } from '../../../assets'

const LogoComponent = () => {
  const { useIcons } = useAssets()
  const { Logo } = useIcons()
  return (
    <a>
      <img src={Logo} alt='Logo pensionate' />
    </a>
  )
}

export default LogoComponent
