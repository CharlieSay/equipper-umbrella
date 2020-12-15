import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from '../../core/style/containers.styles';
import { EquipmentCard, ContentTableCard } from './influencer-page-styles';
import {
  ALinkSmallGray,
  HeroTitle,
  SubTitle,
  SectionH2,
} from '../../core/style/typography.styles';

import getInfluencerPageData from '../../hooks/influencer-page-hooks';
import InfluencerPageLoading from './influencer-page-loading';
import { InfluencerPageModel } from '../../core/models/influencer-page.model';
import InfluencerGroup from '../../core/components/popular-group/influencer-group';
import './influencer-page.scss';

const SmallPrint = styled.small``;

const InfluencerPageUsingParams = () => {
  const getInfluencerData = getInfluencerPageData();

  if (getInfluencerData.isLoading) {
    return (
      <ContainerConstrained>
        <InfluencerPageLoading />
      </ContainerConstrained>
    );
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
  );
};

const InfluencerPageInternal = (props: InfluencerPageModel) => {
  const showSimilarCreator = props.similarCreators.length >= 3;

  return (
    <ContainerConstrained>
      <Row className="key-facts-container">
        <Col>
          <Row>
            <Image
              src={props.personalFacts.ytBanner}
              alt="First slide"
              rounded
              thumbnail
            />
          </Row>
          <Row>
            <Col style={{ marginBottom: '8px', paddingLeft: '0' }}>
              <Link
                to={`/category/${props.keyFacts.creatorType.toLowerCase()}`}
              >
                <Badge variant="red">{props.keyFacts.creatorType}</Badge>
              </Link>
            </Col>
          </Row>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{props.personalFacts.name}</td>
              </tr>
              <tr>
                <td>Short Description</td>
                <td>{props.personalFacts.description}</td>
              </tr>
              <tr>
                <td>Real Name</td>
                <td>{props.personalFacts.realName}</td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td>{props.personalFacts.dob}</td>
              </tr>
              <tr>
                <td>Active Since</td>
                <td>{props.keyFacts.activeSince}</td>
              </tr>
              <tr>
                <td>Last updated </td>
                <td>{props.keyFacts.lastUpdated}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <div className="image-aligner">
            <Row>
              <Image
                src={props.personalFacts.ytTumbnail}
                alt="First slide"
                rounded
                thumbnail
              />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <ListGroup variant="flush">
          <ContentTableCard>
            <ListGroup.Item>
              <HeroTitle>{`${props.personalFacts.name}'s equipment`}</HeroTitle>
              <ul>
                {props.usedEquipment.map((equip, i) => (
                  <li key={i}>
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
          {props.usedEquipment.map((equipmentVal, i) => (
            <EquipmentCard
              key={i}
              id={`${equipmentVal.anchor}`}
              style={{ justifyContent: 'center' }}
            >
              <ListGroup.Item>
                <HeroTitle>{equipmentVal.friendlySectionName}</HeroTitle>
                {equipmentVal.equipment.map((equipmentDetail, i) => (
                  <div key={i}>
                    <SectionH2>{`What ${equipmentDetail.part} does ${props.personalFacts.name} have?`}</SectionH2>
                    <SubTitle primary>{equipmentDetail.friendlyName}</SubTitle>
                    <BaseUnitTopBottomPadding />
                    <Row>
                      <Image
                        src={`${equipmentDetail.thumbnail}`}
                        fluid
                        thumbnail
                        rounded
                      />
                      <Col style={{ paddingTop: '34px' }}>
                        {equipmentDetail.affiliate.map(
                          (affiliateSingular, i) => (
                            <Button
                              key={i}
                              href={affiliateSingular.affiliateUrl}
                              variant="gray"
                              target="_blank"
                            >
                              Click to buy from
                              {' '}
                              {affiliateSingular.vendor}
                            </Button>
                          ),
                        )}
                        <Row>
                          <SmallPrint>
                            <BaseUnitTopBottomPadding />
                            {'Wrong item or not quite right? Let us know '}
                            <ALinkSmallGray
                              href={`/submit?influencerName=${props.personalFacts.name}&equipmentName=${equipmentDetail.friendlyName}`}
                            >
                              here
                            </ALinkSmallGray>
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
          popularInfluencers={props.similarCreators}
          groupTitle="You may also want to look at"
          groupSubTitle={`Similar creators to ${props.personalFacts.name}`}
        />
      )}
    </ContainerConstrained>
  );
};

export default InfluencerPageUsingParams;
