import React from 'react'
import {
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
  MiddleContainer,
} from '../../core/style/containers.styles'
import { H1HeroTitleLightRed } from '../../core/style/typography.styles'

const ContactUsPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitleLightRed>Contact Us</H1HeroTitleLightRed>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default ContactUsPage
