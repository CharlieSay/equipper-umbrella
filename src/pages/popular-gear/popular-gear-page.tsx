import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  WideCard,
  Cards,
} from '../../core/components/influencer-card/cards-styles'
import PopularGearBold from './popular-gear-styles'
import { ContainerConstrained } from '../../core/style/containers.styles'
import {
  ALinkSmall,
  H1HeroTitleLightRed,
  H2TitleLightRed,
  PNormal,
} from '../../core/style/typography.styles'
import AffiliateCard from '../../core/components/affiliate-card/affiliate-card'

import getPopularGear from '../../hooks/popular-gear-hooks'

const CommonGearPage = () => {
  const popularGear = getPopularGear()

  return (
    <ContainerConstrained>
      <H1HeroTitleLightRed>Popular Gear</H1HeroTitleLightRed>
      {popularGear.map((section) => (
        <Row key={`${section.anchor}`} id={section.anchor}>
          <Row style={{ width: `100%` }}>
            <H2TitleLightRed>{section.friendlySectionName}</H2TitleLightRed>
          </Row>
          <Cards>
            {section.equipment.map((equipment) => (
              <WideCard key={equipment.friendlyName}>
                <Row style={{ paddingBottom: `8px` }}>
                  <img
                    alt={`${equipment.friendlyName}`}
                    src={equipment.thumbnail}
                    style={{ width: `170px`, height: `170px` }}
                  />
                  <Col>
                    <PopularGearBold>{`${equipment.friendlyName}`}</PopularGearBold>
                    <div style={{ marginBottom: '8px' }}>
                      <div>
                        <PNormal>Used by</PNormal>
                      </div>
                      <div>
                        {equipment.usedBy.map((influencer, i) => (
                          <ALinkSmall
                            primary
                            key={`${influencer.displayName}`}
                            href={`/influencer/${influencer.link}`}
                          >
                            {`${influencer.displayName}${
                              i === equipment.usedBy.length - 1 ? '' : ','
                            } `}
                          </ALinkSmall>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
                {equipment.affiliate.map((affiliateSingular) => (
                  <AffiliateCard
                    href={affiliateSingular.affiliateUrl}
                    style={{ width: `100%` }}
                    variant="gray"
                    vendor={affiliateSingular.vendor}
                  />
                ))}
              </WideCard>
            ))}
          </Cards>
        </Row>
      ))}
    </ContainerConstrained>
  )
}

export default CommonGearPage
