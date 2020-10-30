import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { InfluencerSearchModel } from "../../models/influencer-search.model";
import { SectionH2, SubTitle } from "../../style/typography.styles";
import styled from "styled-components";
import "./influencer-group.scss";

interface InfluencerGroupProps {
  groupTitle: string;
  groupSubTitle: string;
  popularInfluencers: InfluencerSearchModel[];
}

const CardStyle = styled.div`
  color: ${(props) => props.theme.lightRed};
`;

const NoTextDecoration = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

const InfluencerGroup = (props: InfluencerGroupProps) => {
  return (
    <>
      <SectionH2>{props.groupTitle}</SectionH2>
      <SubTitle>{props.groupSubTitle}</SubTitle>
      <CardDeck style={{ marginTop: `24px` }}>
        {props.popularInfluencers.map((influencer, idx) => (
          <Card key={idx} className="mb-2" bg="dark-red">
            <NoTextDecoration href={influencer.link}>
              <CardStyle>
                <Card.Img src={influencer.imgUrl} />
                <Card.Body>
                  <Card.Title>{influencer.name}</Card.Title>
                  <Card.Text>{influencer.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>Last updated {influencer.lastUpdatedBlurb}</small>
                </Card.Footer>
              </CardStyle>
            </NoTextDecoration>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default InfluencerGroup;
