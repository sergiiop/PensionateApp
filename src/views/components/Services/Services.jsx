import { useLayouts } from '../../layouts'

const Services = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <div className='even-columns'>
        <h1>Lorem ipsum, dolor</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, ea dolores doloremque cum, ducimus alias </p>
      </div>
      <div className='services-wrapper'>
        <div>
          {/* TODO: COMPONENT SERVICE */}
          <div>
            <img src='' alt='Icon Service' />
          </div>
          <h1>Service Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum sit quos veniam molestiae ut, dolorem reprehenderit </p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Services
