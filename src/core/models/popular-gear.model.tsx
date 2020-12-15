import { Equipment, UsedEquipment } from './influencer-page.model';

export interface UsedBy {
  displayName: string;
  link: string;
}

export interface UsedEquipmentWithUsedBy {
  friendlySectionName: string;
  anchor: string;
  equipment: EquipmentWithUsedBy[];
}

export interface EquipmentWithUsedBy extends Equipment {
  usedBy: UsedBy[];
}
