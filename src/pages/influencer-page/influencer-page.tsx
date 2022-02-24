import { useQuery } from '@apollo/client'
import React, { Suspense } from 'react'
import { Badge, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import ImageCom from '../../core/components/image/image'
import { SocialImage } from '../../core/components/image/social-image'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import Disclaimer from '../../core/components/text/disclaimer'
import TextWithSeeMore from '../../core/components/text/see-more'
import { InfluencerPageModel } from '../../core/models/influencer-page.model'
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
  Flex,
  MiddleContainer,
} from '../../core/style/containers.styles'
import {
  ALinkSmall,
  H1HeroTitle,
  H1HeroTitleLightRed,
  H2TitleLightRed,
  PBold,
  Small,
  SubTitle,
} from '../../core/style/typography.styles'
import convertToTitleCase from '../../utils/format-utils'
import InfluencerPageLoading from './influencer-page-loading'
import PAGE_QUERY from './influencer-page-query'
import {
  Banner,
  ErrorMessageAligner,
  KeyFactsKey,
  KeyFactsValue,
  PFriendlyEquipmentName,
  SmallPrint,
  TopBar,
  WideCard,
} from './influencer-page-styles'
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
        <Banner src={media.ytBanner} alt="First slide" />
      </Row>
      <WideCard>
        <Row>
          <Col style={{ width: `100%`, margin: `0` }}>
            <H1HeroTitle>{`${convertToTitleCase(
              personalFacts.name,
            )}`}</H1HeroTitle>
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
                        maxHeight="150px"
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
                            Wrong item or not quite right? Let us know
                            <ALinkSmall
                              primary
                              href={`/submit?influencerName=${personalFacts.name}&equipmentName=${equipmentDetail.friendlyName}`}
                            >
                              &nbsp;here
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
      <Suspense fallback={<Spinner animation="border" />}>
        <InfluencerGroup
          popularInfluencers={similarCreators}
          groupTitle="You may also want to look at"
          groupSubTitle={`Similar creators to ${personalFacts.name}`}
        />
      </Suspense>
      <Disclaimer />
    </ContainerConstrained>
  )
}

const InfluencerPageUsingParams = () => {
  const params = useParams<{ id: string }>()
  const { loading, data, error } = useQuery(PAGE_QUERY, {
    variables: { influencerName: params.id },
  })

  if (loading) {
    return (
      <ContainerConstrained>
        <InfluencerPageLoading />
      </ContainerConstrained>
    )
  }

  if (error) {
    console.log(error)
    return (
      <ContainerConstrained>
        <WideCard>
          <Col style={{ width: `100%`, margin: `0` }}>
            <ErrorMessageAligner>
              <H1HeroTitle>5😱😱</H1HeroTitle>
              <SubTitle primary>Well this is embarassing...</SubTitle>
              <Small>
                Something went wrong our end, try again! Or if this keeps
                happening please let us know!
              </Small>
            </ErrorMessageAligner>
          </Col>
        </WideCard>
      </ContainerConstrained>
    )
  }

  return (
    <>
      {data.influencerResult && (
        <div>
          <Helmet>
            <title>{`${convertToTitleCase(
              data.influencerResult.personalFacts.name,
            )} - Equippr`}</title>
          </Helmet>
          <InfluencerPageInternal {...data.influencerResult} />
        </div>
      )}
    </>
  )
}

export default InfluencerPageUsingParams
