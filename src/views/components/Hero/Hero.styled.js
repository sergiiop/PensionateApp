import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const HeroTitle = styled.h1`
  font-size: 3.6rem;
  line-height: 1;
`

export const HeroParagraph = styled.p`
  font-size: 1.4rem;
  line-height: 1;
  margin-top: 0.6rem;
  max-width: 60ch;
`

export const HeroInput = styled.input`
  width: 50%;
  margin-top: 1.2rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid #333;
`
