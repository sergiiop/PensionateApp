import { useLayouts } from '../../layouts'
import {
  HeroContainer,
  HeroInput,
  HeroParagraph,
  HeroTitle
} from './Hero.styled'
import { useAssets } from '../../../assets'

const Hero = () => {
  const { SectionLayout } = useLayouts()
  const { useImages } = useAssets()
  const { HeroImage } = useImages()

  return (
    <SectionLayout background={`url(${HeroImage})`}>
      <HeroContainer>
        <HeroTitle>HW PENSIONATE</HeroTitle>
        <HeroParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          totam soluta, dolorem incidunt tenetur,
        </HeroParagraph>
        <HeroInput
          type='text'
          placeholder='Enter an address neghborhood or city'
        />
      </HeroContainer>
    </SectionLayout>
  )
}

export default Hero
