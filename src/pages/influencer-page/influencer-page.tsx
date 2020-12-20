import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from '../../core/style/containers.styles'
import {
  EquipmentCard,
  ContentTableCard,
  PFriendlyEquipmentName,
} from './influencer-page-styles'
import {
  ALinkSmall,
  H1HeroTitleLightRed,
  H2TitleLightRed,
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

const InfluencerPageInternal = (props: InfluencerPageModel) => {
  const { personalFacts, keyFacts, usedEquipment, similarCreators } = props

  const showSimilarCreator = similarCreators.length >= 3

  return (
    <ContainerConstrained>
      <Row className="key-facts-container">
        <Col>
          <Row>
            <Image
              src={personalFacts.ytBanner}
              alt="First slide"
              rounded
              thumbnail
            />
          </Row>
          <Row>
            <Col style={{ marginBottom: '8px', paddingLeft: '0' }}>
              <Link to={`/category/${keyFacts.creatorType.toLowerCase()}`}>
                <Badge variant="red">{keyFacts.creatorType}</Badge>
              </Link>
            </Col>
          </Row>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{personalFacts.name}</td>
              </tr>
              <tr>
                <td>Short Description</td>
                <td>{personalFacts.description}</td>
              </tr>
              <tr>
                <td>Real Name</td>
                <td>{personalFacts.realName}</td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td>{personalFacts.dob}</td>
              </tr>
              <tr>
                <td>Active Since</td>
                <td>{keyFacts.activeSince}</td>
              </tr>
              <tr>
                <td>Last updated </td>
                <td>{keyFacts.lastUpdated}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <div className="image-aligner">
            <Row>
              <ImageCom maxWidth="186px" src={personalFacts.ytTumbnail} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <ListGroup variant="flush">
          <ContentTableCard>
            <ListGroup.Item>
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
        <InfluencerGroup
          popularInfluencers={similarCreators}
          groupTitle="You may also want to look at"
          groupSubTitle={`Similar creators to ${personalFacts.name}`}
        />
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
