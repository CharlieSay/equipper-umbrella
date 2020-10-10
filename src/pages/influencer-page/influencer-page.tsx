import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import { InfluencerPageProps } from "../../core/models/influencer-page.model";
import InfluencerTestData from "../../core/data/influencer-page-data.json";

import "./influencer-page.scss";

const InfluencerPageUsingParams = () => {
  return <InfluencerPageInternal {...InfluencerTestData} />;
};

const InfluencerPageInternal = (props: InfluencerPageProps) => {
  return (
    <div className="container--fixed-wide">
      <Row>
        <Col>
          <Image src={props.personalFacts.thumbnail} rounded />
        </Col>
        <Col>
          <Row>
            <Col>
              <Badge variant="primary">{props.keyFacts.creatorType}</Badge>
            </Col>
          </Row>
          <h1>{props.personalFacts.name}</h1>
          <h3>{props.personalFacts.description}</h3>
          <h6>{props.personalFacts.realName}</h6>
          <h6>{props.personalFacts.dob}</h6>
          {`Active since ${props.keyFacts.activeSince}`}
        </Col>
      </Row>
      <Row>
        <ListGroup variant="flush">
          {props.usedEquipment.map((equipmentVal, i) => (
            <ListGroup.Item key={i}>
              <h1>{equipmentVal.friendlySectionName}</h1>
              {equipmentVal.equipment.map((equipmentDetail, i) => (
                <div key={i}>
                  <Badge variant="primary">{equipmentDetail.part}</Badge>
                  <Image
                    src={`${equipmentDetail.thumbnail}`}
                    fluid
                    bsPrefix={"image-limiter"}
                  />
                  <h1>{equipmentDetail.friendlyName}</h1>
                  {equipmentDetail.affiliate.map((affiliateSingular, i) => (
                    <Button
                      href={affiliateSingular.affiliateUrl}
                      variant="primary"
                      key={i}
                    >
                      Click to buy from {affiliateSingular.vendor}
                    </Button>
                  ))}
                </div>
              ))}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </div>
  );
};

export default InfluencerPageUsingParams;
