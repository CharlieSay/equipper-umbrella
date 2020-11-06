import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import getSearch from "../../hooks/search-hooks";
import { ContainerConstrained } from "../../core/style/containers.styles";
import { HeroTitle } from "../../core/style/typography.styles";
import Loading from "../utility-pages/loading/loading";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import styled from "styled-components";
import { Col } from "react-bootstrap";

function convertToTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const NoTextDecoration = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;
const CardStyle = styled.div`
  color: ${(props) => props.theme.lightRed};
`;

const Search = () => {
  const { isLoading, searchResults } = getSearch();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CardColumns>
      {searchResults &&
        searchResults.map((influencer, idx) => (
          <Col key={idx}>
            <Card className="mb-2" bg="dark-red">
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
          </Col>
        ))}
    </CardColumns>
  );
};

const SearchWrapper = () => {
  const queryFromStorage = queryString.parse(useLocation().search);
  const queryName = convertToTitleCase(
    queryFromStorage?.query ? queryFromStorage.query.toString() : ""
  );
  const heroTitle =
    queryName === ""
      ? "This is all the influencers we have got"
      : `Here's what we found for ${queryName}`;

  return (
    <ContainerConstrained>
      <HeroTitle>{heroTitle}</HeroTitle>
      <Search />
    </ContainerConstrained>
  );
};

export default SearchWrapper;
