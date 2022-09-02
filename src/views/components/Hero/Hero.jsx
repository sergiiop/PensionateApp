import { useLayouts } from '../../layouts'

const Hero = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <div>
        <h1>HW PENSIONATE</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam soluta, dolorem incidunt tenetur,</p>
        <input type='text' />
      </div>
    </SectionLayout>
  )
}

export default Hero
