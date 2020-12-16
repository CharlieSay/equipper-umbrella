import React from "react";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import {
  BaseUnitTopBottomPadding,
  DoubleBaseUnitTopBottomPadding,
} from "../../style/containers.styles";
import { HeroTitleGray, SubTitle } from "../../style/typography.styles";
import InfluencerCard from "../influencer-card/influencer-card";
import { Centered, Cards } from "../influencer-card/cards-styles";

import "./influencer-group.scss";

interface InfluencerGroupProps {
  groupTitle: string;
  groupSubTitle: string;
  popularInfluencers: InfluencerSearchModel[];
}

const InfluencerGroup = (props: InfluencerGroupProps) => {
  const { groupTitle, groupSubTitle, popularInfluencers } = props;

  return (
    <>
      <DoubleBaseUnitTopBottomPadding />
      <HeroTitleGray>{groupTitle}</HeroTitleGray>
      <SubTitle primary>{groupSubTitle}</SubTitle>
      <BaseUnitTopBottomPadding />
      <Centered>
        <Cards>
          {popularInfluencers.map((influencer) => (
            <InfluencerCard influencer={influencer} key={influencer.name} />
          ))}
        </Cards>
      </Centered>
    </>
  );
};

export default InfluencerGroup;
