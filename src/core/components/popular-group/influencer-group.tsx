import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import { HeroTitleGray, SubTitle } from "../../style/typography.styles";
import InfluencerCard from "../influencer-card/influencer-card";

import "./influencer-group.scss";

interface InfluencerGroupProps {
  groupTitle: string;
  groupSubTitle: string;
  popularInfluencers: InfluencerSearchModel[];
}

const InfluencerGroup = (props: InfluencerGroupProps) => {
  return (
    <>
      <HeroTitleGray>{props.groupTitle}</HeroTitleGray>
      <SubTitle>{props.groupSubTitle}</SubTitle>
      <CardDeck style={{ marginTop: `24px` }}>
        {props.popularInfluencers.map((influencer, idx) => (
          <InfluencerCard influencer={influencer} key={idx} />
        ))}
      </CardDeck>
    </>
  );
};

export default InfluencerGroup;
