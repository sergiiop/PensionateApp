import { useLayouts } from '../../layouts'

const Contact = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <h1>Contact with ours</h1>
      <div>
        <div className='contact-information-wrapper'>
          <div>
            <img src='' alt='icon' />
            <p>Lorem, ipsum dolor sit</p>
          </div>
          <div>
            <img src='' alt='icon' />
            <p>Lorem, ipsum dolor sit</p>
          </div>
          <div>
            <img src='' alt='icon' />
            <p>Lorem, ipsum dolor sit</p>
          </div>
        </div>
        <div className='contact-form-wrapper'>
          <div>
            <input type='text' placeholder='Enter your Name' />
            <input type='text' placeholder='Enter your Email' />
            <input type='text' placeholder='Enter your Phone' />
            <input type='text' placeholder='Enter Subject' />
          </div>
          <textarea name='body' placeholder='Type your message' />
          <button>Send Message</button>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Contact
