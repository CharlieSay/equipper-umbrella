import React, { Suspense } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { Badge, Spinner } from 'react-bootstrap'
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from '../../core/style/containers.styles'
import {
  EquipmentCard,
  ContentTableCard,
  TopBar,
  PFriendlyEquipmentName,
  MarginSixteenPixels,
} from './influencer-page-styles'
import {
  ALinkSmall,
  Small,
  H1HeroTitleLightRed,
  H2TitleLightRed,
  PBold,
} from '../../core/style/typography.styles'

import ImageCom from '../../core/components/image/image'

import getInfluencerPageData from '../../hooks/influencer-page-hooks'
import InfluencerPageLoading from './influencer-page-loading'
import { InfluencerPageModel } from '../../core/models/influencer-page.model'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import './influencer-page.scss'

const SmallPrint = styled.small`
  color: ${(props) => props.theme.darkBlue};
`

const KeyFactEntry = (props: { key: string; value: string }) => {
  const { key, value } = props
  return (
    <Row>
      <PBold>{key}</PBold>
      <PBold style={{ paddingLeft: `8px` }}> {value}</PBold>
    </Row>
  )
}

const InfluencerPageInternal = (props: InfluencerPageModel) => {
  const { personalFacts, keyFacts, usedEquipment, similarCreators } = props

  const showSimilarCreator = similarCreators.length >= 3

  return (
    <ContainerConstrained>
      <Row>
        <TopBar>
          <Badge style={{ maxHeight: `20px` }} variant="red">
            {keyFacts.creatorType}
          </Badge>
          <Small>{`Last updated ${keyFacts.lastUpdated}`}</Small>
        </TopBar>
        <Image
          style={{ width: `100%` }}
          src={personalFacts.ytBanner}
          alt="First slide"
          thumbnail
        />
      </Row>
      <Row>
        <ContentTableCard>
          <MarginSixteenPixels>
            <H1HeroTitleLightRed>{personalFacts.name}</H1HeroTitleLightRed>
            <KeyFactEntry key="Date Of Birth" value={personalFacts.dob} />
            <KeyFactEntry key="BBBh" value={personalFacts.dob} />
          </MarginSixteenPixels>
        </ContentTableCard>
      </Row>
      <Row>
        <ListGroup variant="flush">
          <ContentTableCard>
            <ListGroup.Item style={{ padding: `16px` }}>
              <H1HeroTitleLightRed>{`${personalFacts.name}'s equipment`}</H1HeroTitleLightRed>
              <ul>
                {usedEquipment.map((equip) => (
                  <li key={equip.friendlySectionName}>
                    <a
                      style={{ color: ' #283747', fontWeight: 'bold' }}
                      href={`#${equip.anchor.toLowerCase()}`}
                    >
                      {`${equip.friendlySectionName}`}
                    </a>
                  </li>
                ))}
              </ul>
            </ListGroup.Item>
          </ContentTableCard>
          {usedEquipment.map((equipmentVal) => (
            <EquipmentCard
              key={equipmentVal.friendlySectionName}
              id={`${equipmentVal.anchor}`}
              style={{ justifyContent: 'center' }}
            >
              <ListGroup.Item>
                <H1HeroTitleLightRed>
                  {equipmentVal.friendlySectionName}
                </H1HeroTitleLightRed>
                {equipmentVal.equipment.map((equipmentDetail) => (
                  <div key={equipmentDetail.friendlyName}>
                    <H2TitleLightRed>{`What ${equipmentDetail.part} does ${personalFacts.name} have?`}</H2TitleLightRed>
                    <PFriendlyEquipmentName>
                      {equipmentDetail.friendlyName}
                    </PFriendlyEquipmentName>
                    <BaseUnitTopBottomPadding />
                    <Row>
                      <ImageCom
                        maxWidth="150px"
                        src={`${equipmentDetail.thumbnail}`}
                      />
                      <Col style={{ paddingTop: '34px' }}>
                        {equipmentDetail.affiliate.map((affiliateSingular) => (
                          <Button
                            key={affiliateSingular.vendor}
                            href={affiliateSingular.affiliateUrl}
                            variant="gray"
                            target="_blank"
                          >
                            Click to buy from {affiliateSingular.vendor}
                          </Button>
                        ))}
                        <Row>
                          <SmallPrint>
                            <BaseUnitTopBottomPadding />
                            {'Wrong item or not quite right? Let us know '}
                            <ALinkSmall
                              primary
                              href={`/submit?influencerName=${personalFacts.name}&equipmentName=${equipmentDetail.friendlyName}`}
                            >
                              here
                            </ALinkSmall>
                          </SmallPrint>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                ))}
              </ListGroup.Item>
            </EquipmentCard>
          ))}
        </ListGroup>
      </Row>
      {showSimilarCreator && (
        <Suspense fallback={<Spinner animation="border" />}>
          <InfluencerGroup
            popularInfluencers={similarCreators}
            groupTitle="You may also want to look at"
            groupSubTitle={`Similar creators to ${personalFacts.name}`}
          />
        </Suspense>
      )}
    </ContainerConstrained>
  )
}

interface RouteParams {
  id: string
}

const InfluencerPageUsingParams = () => {
  const params = useParams<RouteParams>()
  const getInfluencerData = getInfluencerPageData()
  console.log(`hi${params.id}`)
  if (getInfluencerData.isLoading) {
    return (
      <ContainerConstrained>
        <InfluencerPageLoading />
      </ContainerConstrained>
    )
  }

  return (
    <>
      {getInfluencerData.influencerPage && (
        <div>
          <Helmet>
            <title>{`${getInfluencerData.influencerPage.personalFacts.name} - Equippr`}</title>
          </Helmet>
          <InfluencerPageInternal {...getInfluencerData.influencerPage} />
        </div>
      )}
    </>
  )
}

export default InfluencerPageUsingParams
