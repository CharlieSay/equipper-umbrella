import React from 'react'
import {
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
  MiddleContainer,
} from '../../core/style/containers.styles'
import { H1HeroTitlePurple } from '../../core/style/typography.styles'

const AboutUsPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitlePurple>About us</H1HeroTitlePurple>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default AboutUsPage
