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
  return (
    <>
      <DoubleBaseUnitTopBottomPadding />
      <HeroTitleGray>{props.groupTitle}</HeroTitleGray>
      <SubTitle primary>{props.groupSubTitle}</SubTitle>
      <BaseUnitTopBottomPadding />
      <Centered>
        <Cards>
          {props.popularInfluencers.map((influencer, idx) => (
            <InfluencerCard influencer={influencer} key={idx} />
          ))}
        </Cards>
      </Centered>
    </>
  );
};

export default InfluencerGroup;
