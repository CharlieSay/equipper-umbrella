import React from "react";
import styled from "styled-components";

import { InfluencerSearchModel } from "../../models/influencer-search.model";

const CardContent = styled.div`
  padding: 1em;
`;

const Card = styled.a`
  flex: 1 0 260px;
  box-sizing: border-box;
  margin: 1rem 0.25em;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  &:hover {
    text-decoration: none;
  }
  @media screen and (min-width: 40em) {
    max-width: calc(50% - 1em);
  }
  @media screen and (min-width: 60em) {
    max-width: calc(25% - 1em);
  }
`;

const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme.lightRed};
`;
const UpdatedBlurb = styled.small`
  font-size: 60%;
  font-weight: 500;
  padding-left: 1rem;
  color: ${(props) => props.theme.midBlack};
`;
const CardText = styled.p`
  font-size: 60%;
  font-weight: light;
  color: ${(props) => props.theme.lightRed};
`;

const Image = styled.img`
  display: block;
  border: 0;
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const CardFooter = styled.div`
  padding: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

interface CardType {
  influencer: InfluencerSearchModel;
  key: number;
}

const InfluencerCard = (props: CardType) => {
  const { influencer, key } = props;

  return (
    <Card key={key} href={influencer.link}>
      <Image src={influencer.imgUrl}></Image>
      <CardContent>
        <CardTitle>{influencer.name}</CardTitle>
        <CardText>{influencer.description}</CardText>
      </CardContent>
      <CardFooter>
        <UpdatedBlurb>Last updated {influencer.lastUpdatedBlurb}</UpdatedBlurb>
      </CardFooter>
    </Card>
  );
};

export default InfluencerCard;
