import React from 'react'
import { useLayouts } from '../../layouts'

const Cta = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <div className='cta-content-wrapper'>
        <span>10</span>
        <p>Lorem, ipsum dolor sit amet</p>
      </div>
      <div className='button'>
        <button>
          contactame
        </button>
      </div>
    </SectionLayout>
  )
}

export default Cta
