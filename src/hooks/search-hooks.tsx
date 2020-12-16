import { useEffect, useState } from "react";
import { InfluencerSearchModel } from "../core/models/influencer-search.model";

import popularData from "../core/data/search-result-data.json";

interface SearchResultsInterface {
  isLoading: boolean;
  searchResults: InfluencerSearchModel[];
}

const getSearch = (): SearchResultsInterface => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResultData, setSearchResultData] = useState<
    InfluencerSearchModel[]
  >([]);

  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
        setSearchResultData(popularData);
      }, 1000);
    }
    // if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  return { isLoading, searchResults: searchResultData };
};

export default getSearch;
