import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import { ContainerConstrained } from "../../core/style/containers.styles";
import {
  SectionH2Red,
  ALinkSmallGray,
} from "../../core/style/typography.styles";

import getInfluencerPageData from "../../hooks/influencer-page-hooks";

import { InfluencerPageProps } from "../../core/models/influencer-page.model";
import "./influencer-page.scss";

const InfluencerPageUsingParams = () => {
  const getInfluencerData = getInfluencerPageData();

  return <InfluencerPageInternal {...getInfluencerData} />;
};

const InfluencerPageInternal = (props: InfluencerPageProps) => {
  const showSimilarCreator = props.similarCreators.length >= 3;

  return (
    <ContainerConstrained>
      <Row className="key-facts-container">
        <Col>
          <Row>
            <Col style={{ marginBottom: `8px`, paddingLeft: `0` }}>
              <a href={`/category/${props.keyFacts.creatorType.toLowerCase()}`}>
                <Badge variant="red">{props.keyFacts.creatorType}</Badge>
              </a>
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
            <Image
              src={props.personalFacts.ytTumbnail}
              alt="First slide"
              rounded
              thumbnail
            />
          </div>
        </Col>
      </Row>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ backgroundColor: `#f3f3f3` }}>
            <h1 style={{ fontWeight: `bold`, color: `#de354c` }}>
              {`${props.personalFacts.name}'s equipment`}
            </h1>
            <ul>
              {props.usedEquipment.map((equip, i) => (
                <li key={i}>
                  <a
                    style={{ color: ` #283747`, fontWeight: `bold` }}
                    href={`#${equip.anchor}`}
                  >
                    {`${equip.friendlySectionName}`}
                  </a>
                </li>
              ))}
            </ul>
          </ListGroup.Item>
          {props.usedEquipment.map((equipmentVal, i) => (
            <ListGroup.Item
              key={i}
              style={{ backgroundColor: `#f3f3f3` }}
              id={`${equipmentVal.anchor}`}
            >
              <h1 style={{ fontWeight: `bold`, color: `#de354c` }}>
                {equipmentVal.friendlySectionName}
              </h1>
              {equipmentVal.equipment.map((equipmentDetail, i) => (
                <div key={i}>
                  <h4>{`What ${equipmentDetail.part} does ${props.personalFacts.name} have?`}</h4>
                  <h2>{equipmentDetail.friendlyName}</h2>
                  <Row>
                    <Image
                      src={`${equipmentDetail.thumbnail}`}
                      fluid
                      thumbnail
                      rounded
                      style={{ maxWidth: `160px` }}
                    />
                    <Col style={{ paddingTop: `34px` }}>
                      {equipmentDetail.affiliate.map((affiliateSingular, i) => (
                        <Button
                          key={i}
                          href={affiliateSingular.affiliateUrl}
                          variant="gray"
                          target="_blank"
                        >
                          Click to buy from {affiliateSingular.vendor}
                        </Button>
                      ))}
                      <Row>
                        <small style={{ paddingTop: `8px` }}>
                          Wrong item or not quite right? Let us know
                          <ALinkSmallGray
                            href="/submit"
                            style={{ color: ` #283747`, fontWeight: `bold` }}
                          >
                            {" "}
                            here
                          </ALinkSmallGray>
                        </small>
                      </Row>
                    </Col>
                  </Row>
                </div>
              ))}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
      {showSimilarCreator && (
        <Row style={{ paddingTop: `32px` }}>
          <Col>
            <SectionH2Red>Similar creators</SectionH2Red>
            <CardDeck>
              {props.similarCreators.map((similarCreator, idx) => (
                <Card key={idx} className="mb-2" bg="dark-red">
                  <a
                    className="influencer-group-link"
                    href={similarCreator.link}
                  >
                    <Card.Img src={similarCreator.thumbnail} />
                    <Card.Body className="card-text">
                      <Card.Title>{similarCreator.creatorName}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="card-text">
                        {similarCreator.creatorType}
                      </small>
                    </Card.Footer>
                  </a>
                </Card>
              ))}
            </CardDeck>
          </Col>
        </Row>
      )}
    </ContainerConstrained>
  );
};

export default InfluencerPageUsingParams;
