export interface InfluencerPageProps {
  personalFacts: PersonalFacts;
  keyFacts: KeyFacts;
  usedEquipment: UsedEquipment[];
  similarCreators: SimilarCreator[];
}

export interface KeyFacts {
  activeSince: string;
  creatorType: string;
}

export interface PersonalFacts {
  name: string;
  realName: string;
  description: string;
  dob: string;
  thumbnail: string;
}

export interface SimilarCreator {
  creatorName: string;
  creatorType: string;
  link: string;
  thumbnail: string;
}

export interface UsedEquipment {
  friendlySectionName: string;
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
