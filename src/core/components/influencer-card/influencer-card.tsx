import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import { InfluencerSearchModel } from "../../models/influencer-search.model";

const CardStyle = styled.div`
  color: ${(props) => props.theme.lightRed};
`;

const NoTextDecoration = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

interface CardType {
  influencer: InfluencerSearchModel;
  key: number;
}

const InfluencerCard = (props: CardType) => {
  const { influencer, key } = props;

  return (
    <Card key={key} className="mb-4" bg="dark-red" style={{ minWidth: "35%" }}>
      <NoTextDecoration href={influencer.link}>
        <CardStyle>
          <Card.Img src={influencer.imgUrl} />
          <Card.Body>
            <Card.Title>{influencer.name}</Card.Title>
            <Card.Text>{influencer.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {influencer.lastUpdatedBlurb}</small>
          </Card.Footer>
        </CardStyle>
      </NoTextDecoration>
    </Card>
  );
};

export default InfluencerCard;
