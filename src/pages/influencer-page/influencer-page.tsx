import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import InfluencerTestData from "../../core/data/influencer-page-data.json";
import { InfluencerPageProps } from "../../core/models/influencer-page.model";

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
          {props.usedEquipment.map((equipmentVal, i) => (
            <ListGroup.Item key={i} style={{ backgroundColor: ` #f3f3f3` }}>
              <h1 style={{ fontWeight: `bold`, color: `#de354c` }}>
                {equipmentVal.friendlySectionName}
              </h1>
              {equipmentVal.equipment.map((equipmentDetail, i) => (
                <div key={i}>
                  <h4>{equipmentDetail.part}</h4>
                  <h2>{equipmentDetail.friendlyName}</h2>
                  <div style={{ maxWidth: `170px`, maxHeight: `170px` }}>
                    <Image
                      src={`${equipmentDetail.thumbnail}`}
                      fluid
                      thumbnail
                      rounded
                    />
                  </div>
                  <Row style={{ paddingTop: `16px` }}>
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
