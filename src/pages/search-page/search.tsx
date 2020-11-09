import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import getSearch from "../../hooks/search-hooks";
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from "../../core/style/containers.styles";
import { HeroTitle, SubTitle } from "../../core/style/typography.styles";
import InfluencerCard from "../../core/components/influencer-card/influencer-card";
import MyLoader from "../../core/components/influencer-card/influencer-card-loading";
import { CardDeck } from "react-bootstrap";

function convertToTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Search = () => {
  const { isLoading, searchResults } = getSearch();

  if (isLoading) {
    return <MyLoader />;
  }

  return (
    <>
      <SubTitle>{`${searchResults.length} influencers`}</SubTitle>
      <BaseUnitTopBottomPadding />
      <CardDeck>
        {searchResults &&
          searchResults.map((influencer, idx) => (
            <InfluencerCard influencer={influencer} key={idx} />
          ))}
      </CardDeck>
    </>
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
