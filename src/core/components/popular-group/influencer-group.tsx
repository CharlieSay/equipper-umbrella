import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { InfluencerSearchModel } from "../../models/influencer-search.model";

import "./influencer-group.scss";

interface InfluencerGroupProps {
  groupTitle: string;
  popularInfluencers: InfluencerSearchModel[];
}

const InfluencerGroup = (props: InfluencerGroupProps) => {
  return (
    <>
      <h1 className="">{props.groupTitle}</h1>
      <CardDeck>
        {props.popularInfluencers.map((influencer, idx) => (
          <Card key={idx} className="mb-2" bg="dark-red">
            <a className="influencer-group-link" href={influencer.link}>
              <Card.Img src={influencer.imgUrl} />
              <Card.Body className="card-text">
                <Card.Title>{influencer.name}</Card.Title>
                <Card.Text>{influencer.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="card-text">
                  Last updated {influencer.lastUpdatedBlurb}
                </small>
              </Card.Footer>
            </a>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default InfluencerGroup;
