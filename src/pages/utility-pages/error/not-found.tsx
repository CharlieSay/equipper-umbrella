import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from "../../../core/style/containers.styles";
import { H1HeroTitle, SubTitle } from "../../../core/style/typography.styles";

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const NotFound = () => (
  <ContainerConstrained>
    <MiddleContainer>
      <img
        alt="Error kaboom"
        src="https://fansofdavid.com/wp-content/uploads/2014/05/kaboom.png"
      />
      <H1HeroTitle>This page doesnt exist! 🤔</H1HeroTitle>
      <SubTitle primary>Were not quite sure what went wrong there.</SubTitle>
      <BaseUnitTopBottomPadding>
        <Button href="/" variant="red" target="_blank">
          Search for influencers
        </Button>
      </BaseUnitTopBottomPadding>
    </MiddleContainer>
  </ContainerConstrained>
);

export default NotFound;
