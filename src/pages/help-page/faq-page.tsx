import React from 'react'
import {
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
  MiddleContainer,
} from '../../core/style/containers.styles'
import { H1HeroTitlePurple } from '../../core/style/typography.styles'

const FaqPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitlePurple>FAQs</H1HeroTitlePurple>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default FaqPage
