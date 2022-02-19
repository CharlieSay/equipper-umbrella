import React from 'react'
import {
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
  MiddleContainer,
} from '../../core/style/containers.styles'
import { H1HeroTitleLightRed } from '../../core/style/typography.styles'

const AboutUsPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitleLightRed>About us</H1HeroTitleLightRed>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default AboutUsPage
