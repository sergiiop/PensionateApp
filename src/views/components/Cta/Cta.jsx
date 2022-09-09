import React from 'react'
import { useLayouts } from '../../layouts'
import { CtaContainer, CtaItem, CtaWrapper } from './Cta.styled'

const dataCTA = [
  {
    content: 'lorem impsum',
    number: '10'
  },
  {
    content: 'lorem impsum',
    number: '15'
  },
  {
    content: 'lorem impsum',
    number: '20'
  }
]

const Cta = () => {
  const { SectionLayout } = useLayouts()
  return (
    <SectionLayout>
      <CtaContainer>
        <CtaWrapper>
          {dataCTA.map((item, index) => {
            return (
              <CtaItem key={index}>
                <p>{item.content}</p>
                <span>{item.number} +</span>
              </CtaItem>
            )
          })}
        </CtaWrapper>
        <button>contactame</button>
      </CtaContainer>
    </SectionLayout>
  )
}

export default Cta
