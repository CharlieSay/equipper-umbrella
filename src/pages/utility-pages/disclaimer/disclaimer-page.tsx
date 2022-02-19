import React from 'react'
import {
  MiddleContainer,
  ContainerConstrained,
  DoubleBaseUnitTopBottomPadding,
} from '../../../core/style/containers.styles'
import { H1HeroTitleLightRed } from '../../../core/style/typography.styles'

const DisclaimerPage = () => {
  return (
    <DoubleBaseUnitTopBottomPadding>
      <ContainerConstrained>
        <MiddleContainer>
          <H1HeroTitleLightRed>Disclaimer</H1HeroTitleLightRed>
          <p>
            Equippr, receives compensation through affiliate relationships with
            affliates listed on this site. Please know that this in no way
            affects reviews, benchmarks, content, or this sites opinions of
            products, services, manufacturers, partners, or merchants.
          </p>
          <p>Thanks,</p>
          <p>Charlie</p>
          <p>
            Equippr is a participant in the Amazon Associates Programme, an
            affiliate advertising programme designed to provide a means for
            sites to earn advertising fees by advertising and linking to Amazon
          </p>
        </MiddleContainer>
      </ContainerConstrained>
    </DoubleBaseUnitTopBottomPadding>
  )
}

export default DisclaimerPage
