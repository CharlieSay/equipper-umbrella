export interface InfluencerSearchModel {
  name: string;
  description: string;
  link: string;
  imgUrl: string;
  lastUpdatedBlurb?: string;
}

export interface InfluencerSearchModelResponse {
  searchResults: InfluencerSearchModel[];
}
