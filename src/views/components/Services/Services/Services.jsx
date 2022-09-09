import { useLayouts } from '../../../layouts'
import ServiceItem from '../ServiceItem'
import {
  ServicesContainer,
  ServicesParagraph,
  ServicesTitle,
  ServicesWrapper
} from './Services.styled'

const servicesItems = [
  {
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione',
    iconPath: ''
  },
  {
    title: 'Title 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione',
    iconPath: ''
  },
  {
    title: 'Title 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione',
    iconPath: ''
  }
]

const Services = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <h1>Why Choose HW Pensionate</h1>
      <ServicesContainer className='even-columns'>
        <ServicesTitle>Lorem ipsum, dolor</ServicesTitle>
        <ServicesParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          architecto, ea dolores doloremque cum, ducimus alias
        </ServicesParagraph>
      </ServicesContainer>
      <ServicesWrapper>
        {servicesItems.map((serviceItem, index) => (
          <ServiceItem
            key={index}
            img={serviceItem.iconPath}
            title={serviceItem.title}
            paragraph={serviceItem.description}
          />
        ))}
      </ServicesWrapper>
    </SectionLayout>
  )
}

export default Services
