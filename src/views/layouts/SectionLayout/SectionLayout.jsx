import { Container, SectionContainer } from './SectionContainer.styled'

const SectionLayout = ({ children, background }) => {
  return (
    <SectionContainer className='padding-block-800' background={background}>
      <Container className='container'>{children}</Container>
    </SectionContainer>
  )
}

export default SectionLayout
