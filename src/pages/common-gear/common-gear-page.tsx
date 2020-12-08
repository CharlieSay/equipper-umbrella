import React from "react";
import { Button, Row } from "react-bootstrap";

import { ContainerConstrained } from "../../core/style/containers.styles";
import {
  HeroTitle,
  SectionH2,
  SmallBoldButNot,
  SubTitle,
} from "../../core/style/typography.styles";

const CommonGearPage = () => {
  return (
    <ContainerConstrained>
      <HeroTitle>{`Popular Gear`}</HeroTitle>
      <SectionH2>Cameras</SectionH2>
      <Row>
        <SubTitle primary>Canon Powershot</SubTitle>
        <SmallBoldButNot>Used by : KSI, The Sidemen, Joe Sugg</SmallBoldButNot>
        <Button href={"/"} variant="gray" target="_blank">
          Buy now
        </Button>
      </Row>
    </ContainerConstrained>
  );
};

export default CommonGearPage;
