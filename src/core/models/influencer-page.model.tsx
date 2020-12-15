import { InfluencerSearchModel } from './influencer-search.model';

export interface InfluencerPageModel {
  personalFacts: PersonalFacts;
  keyFacts: KeyFacts;
  usedEquipment: UsedEquipment[];
  similarCreators: InfluencerSearchModel[];
}

export interface KeyFacts {
  activeSince: string;
  creatorType: string;
  lastUpdated: string;
  socialLinks: SocialLinks[];
}

export interface SocialLinks {
  socialNetwork: string;
  link: string;
}

export interface PersonalFacts {
  name: string;
  realName: string;
  description: string;
  dob: string;
  ytTumbnail: string;
  ytBanner: string;
  faceThumbnail: string;
}

export interface SimilarCreator {
  creatorName: string;
  creatorType: string;
  link: string;
  thumbnail: string;
}

export interface UsedEquipment {
  friendlySectionName: string;
  anchor: string;
  equipment: Equipment[];
}

export interface Equipment {
  friendlyName: string;
  part: string;
  thumbnail: string;
  affiliate: Affiliate[];
}

export interface Affiliate {
  vendor: string;
  affiliateUrl: string;
}
