import React from 'react'
import {
  MiddleContainer,
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
} from '../../../core/style/containers.styles'
import { H1HeroTitleLightRed } from '../../../core/style/typography.styles'

const PrivacyPolicyPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitleLightRed>Privacy Policy</H1HeroTitleLightRed>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default PrivacyPolicyPage
