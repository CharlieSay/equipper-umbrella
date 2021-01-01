import React from 'react'
import styled from 'styled-components'
import { ALinkSmall } from '../../style/typography.styles'

const WholeText = styled.p`
  color: ${(props) => props.theme.darkGrey};
  font-size: 0.85em;
  line-height: 14px;
`

const Disclaimer = () => {
  return (
    <WholeText>
      * Equippr may receive compensation for purchases made at participating
      retailers linked on this site. This compensation does not affect what
      products or prices are displayed, or the order of prices listed. Learn
      more
      <ALinkSmall primary href="/disclaimer">
        here.
      </ALinkSmall>
    </WholeText>
  )
}

export default Disclaimer
