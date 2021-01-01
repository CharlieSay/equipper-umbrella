import { InfluencerSearchModel } from './influencer-search.model'

export interface InfluencerPageModel {
  personalFacts: PersonalFacts
  media: Media
  keyFacts: KeyFact[]
  usedEquipment: UsedEquipment[]
  similarCreators: InfluencerSearchModel[]
}

export interface KeyFact {
  identifier: string
  fact: string
  value: string
}

export interface Media {
  ytBanner: string
  ytTumbnail: string
  faceThumbnail: string
}

export interface PersonalFacts {
  name: string
  creatorType: string
  lastUpdated: string
  description: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  socialNetwork: string
  link: string
}

export interface SimilarCreator {
  name: string
  description: string
  link: string
  imgUrl: string
  lastUpdatedBlurb?: string
}

export interface UsedEquipment {
  friendlySectionName: string
  anchor: string
  equipment: Equipment[]
}

export interface Equipment {
  friendlyName: string
  part: string
  thumbnail: string
  affiliate: Affiliate[]
}

export interface Affiliate {
  vendor: string
  affiliateUrl: string
}
