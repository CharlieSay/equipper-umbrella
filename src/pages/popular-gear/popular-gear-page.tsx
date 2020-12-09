import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  CardAsDiv,
  VerticalCenter,
  Cards,
} from "../../core/components/influencer-card/cards-styles";

import { ContainerConstrained } from "../../core/style/containers.styles";
import {
  ALinkSmallGray,
  HeroTitle,
  SectionH2,
  SmallBolder,
  SubTitle,
} from "../../core/style/typography.styles";

import { getPopularGear } from "../../hooks/popular-gear-hooks";

const CommonGearPage = () => {
  const popularGear = getPopularGear();

  return (
    <ContainerConstrained>
      <HeroTitle>{`Popular Gear`}</HeroTitle>
      {popularGear.map((section, i) => (
        <Row key={i}>
          <div id={section.anchor} style={{ width: `100%` }}>
            <SectionH2>{section.friendlySectionName}</SectionH2>
            <Cards>
              {section.equipment.map((equipment, i) => (
                <CardAsDiv key={i} style={{ marginTop: `8px`, width: `100%` }}>
                  <Row>
                    <Col>
                      <img src={equipment.thumbnail} />
                    </Col>
                    <Col>
                      <Row>
                        <SmallBolder>{equipment.part}</SmallBolder>
                      </Row>
                      <Row>
                        <SmallBolder>{equipment.friendlyName}</SmallBolder>
                      </Row>
                    </Col>
                    <Col>
                      <SubTitle primary>Used by</SubTitle>
                      {equipment.usedBy.map((influencer, i) => (
                        <ALinkSmallGray
                          key={i}
                          href={`/influencer/${influencer.link}`}
                        >
                          {influencer.displayName},
                        </ALinkSmallGray>
                      ))}
                    </Col>
                    <Col>
                      {equipment.affiliate.map((affiliateSingular, i) => (
                        <Button
                          key={i}
                          href={affiliateSingular.affiliateUrl}
                          variant="gray"
                          target="_blank"
                        >
                          Click to buy from {affiliateSingular.vendor}
                        </Button>
                      ))}
                    </Col>
                  </Row>
                </CardAsDiv>
              ))}
            </Cards>
          </div>
        </Row>
      ))}
    </ContainerConstrained>
  );
};

export default CommonGearPage;
