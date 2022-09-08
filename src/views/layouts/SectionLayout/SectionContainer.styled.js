import styled, { css } from 'styled-components'

export const SectionContainer = styled.section`
  background: ${(props) => props.background || 'transparent'};
  ${(props) =>
    props.background &&
    css`
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
`

export const Container = styled.div``
