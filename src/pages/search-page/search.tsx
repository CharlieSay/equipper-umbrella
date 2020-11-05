import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import getSearch from "../../hooks/search-hooks";
import { ContainerConstrained, Flex } from "../../core/style/containers.styles";
import { HeroTitle } from "../../core/style/typography.styles";
import Loading from "../utility-pages/loading/loading";

function convertToTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Search = () => {
  const isLoading = getSearch();

  if (isLoading) {
    return <Loading />;
  }

  return <div>Search result</div>;
};

const SearchWrapper = () => {
  const queryFromStorage = queryString.parse(useLocation().search);
  const queryName = convertToTitleCase(
    queryFromStorage?.query ? queryFromStorage.query.toString() : ""
  );

  return (
    <ContainerConstrained>
      <HeroTitle>{`Search results for ${queryName}`}</HeroTitle>
      <Search />
    </ContainerConstrained>
  );
};

export default SearchWrapper;
