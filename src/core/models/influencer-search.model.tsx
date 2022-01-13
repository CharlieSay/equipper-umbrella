export interface InfluencerSearchModel {
  name: string
  description: string
  link: string
  imgUrl: string
  lastUpdatedBlurb?: string
  popular?: boolean
}

export interface InfluencerSearchModelResponse {
  searchResults: InfluencerSearchModel[]
}
