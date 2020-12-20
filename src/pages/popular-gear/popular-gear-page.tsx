import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  WideCard,
  Cards,
} from "../../core/components/influencer-card/cards-styles";

import { ContainerConstrained } from "../../core/style/containers.styles";
import {
  ALinkSmall,
  H1HeroTitle,
  H2Title,
  PNormal,
  PBold,
} from "../../core/style/typography.styles";

import getPopularGear from "../../hooks/popular-gear-hooks";

const CommonGearPage = () => {
  const popularGear = getPopularGear();

  return (
    <ContainerConstrained>
      <H1HeroTitle>Popular Gear</H1HeroTitle>
      {popularGear.map((section) => (
        <Row key={`${section.anchor}`} id={section.anchor}>
          <H2Title>{section.friendlySectionName}</H2Title>
          <Cards>
            {section.equipment.map((equipment) => (
              <WideCard key={equipment.friendlyName}>
                <Row>
                  <img
                    alt={`${equipment.friendlyName}`}
                    src={equipment.thumbnail}
                  />
                  <Col>
                    <PNormal>{`${equipment.part}`}</PNormal>
                    <PBold>{` ${equipment.friendlyName}`}</PBold>
                    <div style={{ marginBottom: "8px" }}>
                      <div>
                        <PNormal>Used by</PNormal>
                      </div>
                      <div>
                        {equipment.usedBy.map((influencer, i) => (
                          <ALinkSmall
                            primary
                            key={`${influencer.displayName}`}
                            href={`/influencer/${influencer.link}`}
                          >
                            {`${influencer.displayName}${
                              i === equipment.usedBy.length - 1 ? "" : ","
                            } `}
                          </ALinkSmall>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
                {equipment.affiliate.map((affiliateSingular) => (
                  <Button
                    key={affiliateSingular.vendor}
                    href={affiliateSingular.affiliateUrl}
                    variant="gray"
                    target="_blank"
                  >
                    Click to buy from {affiliateSingular.vendor}
                  </Button>
                ))}
              </WideCard>
            ))}
          </Cards>
        </Row>
      ))}
    </ContainerConstrained>
  );
};

export default CommonGearPage;
