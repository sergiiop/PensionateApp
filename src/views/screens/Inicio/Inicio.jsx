import { useLayouts } from '../../layouts'

const Inicio = () => {
  const { PublicLayout } = useLayouts()

  return (
    <PublicLayout>
      <h1>Hello world</h1>
    </PublicLayout>
  )
}

export default Inicio
