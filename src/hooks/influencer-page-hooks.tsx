import { useEffect, useState } from "react";
import { InfluencerPageModel } from "../core/models/influencer-page.model";

import influencerPageData from "../core/data/influencer-page-data.json";

interface SearchResultsInterface {
  isLoading: boolean;
  influencerPage?: InfluencerPageModel;
}

const getSearch = (): SearchResultsInterface => {
  const [isLoading, setIsLoading] = useState(true);
  const [influencerData, setInfluencerData] = useState<InfluencerPageModel>();

  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
        setInfluencerData(influencerPageData);
      }, 10000);
    }
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  return { isLoading, influencerPage: influencerData };
};

export default getSearch;
