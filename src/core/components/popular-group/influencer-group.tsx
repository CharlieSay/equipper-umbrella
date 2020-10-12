import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import { Link } from "react-router-dom";

import "./influencer-group.scss";

interface InfluencerGroupProps {
  groupTitle: string;
  popularInfluencers: InfluencerSearchModel[];
}

const InfluencerGroup = (props: InfluencerGroupProps) => {
  return (
    <>
      <h1>{props.groupTitle}</h1>
      <CardDeck>
        {props.popularInfluencers.map((influencer, i) => (
          <Card key={i}>
            <Link className="influencer-group-link" to={influencer.link}>
              <Card.Img variant="top" src={influencer.imgUrl} />
              <Card.Body>
                <Card.Title>{influencer.name}</Card.Title>
                <Card.Text>{influencer.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Last updated {influencer.lastUpdatedBlurb}
                </small>
              </Card.Footer>
            </Link>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default InfluencerGroup;
