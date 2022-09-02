import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'

const Inicio = () => {
  const { PublicLayout } = useLayouts()
  const { Hero, Services, Cta, Contact } = useComponents()

  return (
    <PublicLayout>
      <Hero />
      <Services />
      <Cta />
      <Contact />
    </PublicLayout>
  )
}

export default Inicio
