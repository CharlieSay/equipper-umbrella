import React, { Suspense } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { Badge, Spinner } from 'react-bootstrap'
import TextWithSeeMore from '../../core/components/text/see-more'
import Disclaimer from '../../core/components/text/disclaimer'
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
  Flex,
  MiddleContainer,
} from '../../core/style/containers.styles'
import {
  TopBar,
  PFriendlyEquipmentName,
  KeyFactsKey,
  KeyFactsValue,
  WideCard,
  SmallPrint,
} from './influencer-page-styles'
import { SocialImage } from '../../core/components/image/social-image'
import {
  ALinkSmall,
  H1HeroTitleLightRed,
  H2TitleLightRed,
  H1HeroTitle,
  Small,
  PBold,
} from '../../core/style/typography.styles'
import convertToTitleCase from '../../utils/format-utils'
import ImageCom from '../../core/components/image/image'

import getInfluencerPageData from '../../hooks/influencer-page-hooks'
import InfluencerPageLoading from './influencer-page-loading'
import { InfluencerPageModel } from '../../core/models/influencer-page.model'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import './influencer-page.scss'

const KeyFactEntry = (props: { title: string; value: string }) => {
  const { title, value } = props
  return (
    <Row>
      <KeyFactsKey>{title}</KeyFactsKey>
      <KeyFactsValue style={{ paddingLeft: `8px` }}> {value}</KeyFactsValue>
    </Row>
  )
}

const InfluencerPageInternal = (props: InfluencerPageModel) => {
  const {
    personalFacts,
    keyFacts,
    usedEquipment,
    media,
    similarCreators,
  } = props

  const showSimilarCreator = similarCreators.length >= 3

  return (
    <ContainerConstrained>
      <Row>
        <TopBar>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/category/${personalFacts.creatorType.toLowerCase()}`}
          >
            <Badge style={{ maxHeight: `20px` }} variant="red">
              {personalFacts.creatorType}
            </Badge>
          </a>
          <Small>{`Last updated ${personalFacts.lastUpdated}`}</Small>
        </TopBar>
        <Image
          style={{ width: `100%` }}
          src={media.ytBanner}
          alt="First slide"
          thumbnail
        />
      </Row>
      <WideCard>
        <Row>
          <Col style={{ width: `100%`, margin: `0` }}>
            <H1HeroTitle>{`${personalFacts.name}`}</H1HeroTitle>
            {keyFacts.map((keyFact) => (
              <KeyFactEntry
                title={convertToTitleCase(keyFact.fact)}
                value={keyFact.value}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <TextWithSeeMore text={personalFacts.description} limit={200} />
          </Col>
        </Row>
      </WideCard>
      <Row>
        <ListGroup style={{ width: `100%` }}>
          {usedEquipment.map((equipmentVal) => (
            <WideCard
              key={equipmentVal.friendlySectionName}
              id={`${equipmentVal.anchor.toLowerCase()}`}
            >
              <ListGroup.Item style={{ padding: `8px` }}>
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
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
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
                            Buy on {affiliateSingular.vendor}
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
            </WideCard>
          ))}
        </ListGroup>
      </Row>
      <MiddleContainer>
        <PBold>Social Media</PBold>
        <Flex>
          {personalFacts.socialLinks.map((links) => (
            <SocialImage link={links.link} name={links.socialNetwork} />
          ))}
        </Flex>
      </MiddleContainer>
      {showSimilarCreator && (
        <Suspense fallback={<Spinner animation="border" />}>
          <InfluencerGroup
            popularInfluencers={similarCreators}
            groupTitle="You may also want to look at"
            groupSubTitle={`Similar creators to ${personalFacts.name}`}
          />
        </Suspense>
      )}
      <Disclaimer />
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
