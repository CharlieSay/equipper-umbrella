import React from 'react'
import {
  MiddleContainer,
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
} from '../../../core/style/containers.styles'
import { H1HeroTitlePurple } from '../../../core/style/typography.styles'

const PrivacyPolicyPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitlePurple>Privacy Policy</H1HeroTitlePurple>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default PrivacyPolicyPage
