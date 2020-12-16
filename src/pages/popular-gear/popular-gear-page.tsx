import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {
  WideCard,
  Cards,
} from '../../core/components/influencer-card/cards-styles';

import { ContainerConstrained } from '../../core/style/containers.styles';
import {
  ALinkSmallGray,
  HeroTitle,
  SectionH2,
  PNormal,
  PBold,
} from '../../core/style/typography.styles';

import getPopularGear  from '../../hooks/popular-gear-hooks';

const CommonGearPage = () => {
  const popularGear = getPopularGear();

  return (
    <ContainerConstrained>
      <HeroTitle>Popular Gear</HeroTitle>
      {popularGear.map((section) => (
        <Row key={`${section.anchor}`} id={section.anchor}>
            <SectionH2>{section.friendlySectionName}</SectionH2>
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
                      <div style={{ marginBottom: '8px' }}>
                        <div>
                          <PNormal>Used by</PNormal>
                        </div>
                        <div>
                          {equipment.usedBy.map((influencer, i) => (
                            <ALinkSmallGray
                              key={`${influencer.displayName}`}
                              href={`/influencer/${influencer.link}`}
                            >
                              {`${influencer.displayName}${
                                i === equipment.usedBy.length - 1 ? '' : ','
                              } `}
                            </ALinkSmallGray>
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
                      Click to buy from
                      {' '}
                      {affiliateSingular.vendor}
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
