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
      <Image
        alt={`Picture of ${influencer.name}`}
        src={influencer.imgUrl}
      ></Image>
      <CardContent>
        <CardTitle>{influencer.name}</CardTitle>
        <CardText>{influencer.description}</CardText>
      </CardContent>
      <CardFooter>
        <UpdatedBlurb>
          {influencer.lastUpdatedBlurb
            ? `Last updated ${influencer.lastUpdatedBlurb}`
            : "This is broke"}
        </UpdatedBlurb>
      </CardFooter>
    </Card>
  );
};

export default InfluencerCard;
