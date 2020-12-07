import React from "react";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import {
  Card,
  CardContent,
  CardFooter,
  CardText,
  CardTitle,
  UpdatedBlurb,
  Image,
} from "./cards-styles";

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
