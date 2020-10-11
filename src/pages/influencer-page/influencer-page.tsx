import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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
          <Row>
            <Col>
              <a href={`/${props.keyFacts.creatorType.toLowerCase()}`}>
                <Badge variant="primary">{props.keyFacts.creatorType}</Badge>
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
            </tbody>
          </Table>
        </Col>
        <Col>
          <div className="image-aligner">
            <Image src={props.personalFacts.thumbnail} rounded />
          </div>
        </Col>
      </Row>
      <Row>
        <ListGroup variant="flush">
          {props.usedEquipment.map((equipmentVal, i) => (
            <ListGroup.Item key={i}>
              <h1>{equipmentVal.friendlySectionName}</h1>
              {equipmentVal.equipment.map((equipmentDetail, i) => (
                <div key={i}>
                  <span>{equipmentDetail.part}</span>
                  <h2>{equipmentDetail.friendlyName}</h2>
                  <Image
                    src={`${equipmentDetail.thumbnail}`}
                    fluid
                    bsPrefix={"image-limiter"}
                  />
                  <Row>
                    {equipmentDetail.affiliate.map((affiliateSingular, i) => (
                      <Col key={i}>
                        <Button
                          href={affiliateSingular.affiliateUrl}
                          variant="warning"
                        >
                          Click to buy from {affiliateSingular.vendor}
                        </Button>
                      </Col>
                    ))}
                  </Row>
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
