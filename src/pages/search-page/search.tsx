import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { ContainerConstrained, Flex } from "../../core/style/containers.styles";
import { HeroTitleGray, HeroTitle } from "../../core/style/typography.styles";

function convertToTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Search = () => {
  const queryFromStorage = queryString.parse(useLocation().search);
  const queryName = convertToTitleCase(
    queryFromStorage?.query ? queryFromStorage.query.toString() : ""
  );
  return (
    <ContainerConstrained>
      <Flex>
        <HeroTitle>{`Search results for ${queryName}`}</HeroTitle>
      </Flex>
    </ContainerConstrained>
  );
};

export default Search;
