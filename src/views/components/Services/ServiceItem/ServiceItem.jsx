import {
  ServiceContainer,
  ServiceDescription,
  ServicePicture,
  ServiceTitle
} from './Service.styled'

const ServiceItem = ({ img, title, paragraph }) => {
  return (
    <ServiceContainer>
      {/* TODO: COMPONENT SERVICE */}
      <ServicePicture>
        <img src={img} alt='Icon Service' />
      </ServicePicture>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{paragraph}</ServiceDescription>
    </ServiceContainer>
  )
}

export default ServiceItem
