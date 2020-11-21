import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import { BaseUnitTopBottomPadding } from "../../style/containers.styles";
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
      <BaseUnitTopBottomPadding />
      {/* <CardDeck className="justify-content-around">
        {props.popularInfluencers.map((influencer, idx) => (
          <InfluencerCard influencer={influencer} key={idx} />
        ))}
      </CardDeck>{" "} */}
      <div className="row">
        {props.popularInfluencers.map((influencer, idx) => (
          <div key={idx} className="col-4 h-100">
            <InfluencerCard influencer={influencer} key={idx} />
          </div>
        ))}
      </div>
    </>
  );
};

export default InfluencerGroup;
