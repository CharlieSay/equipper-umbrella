import CommonGearJson from '../core/data/popular-gear-data.json';
import { UsedEquipmentWithUsedBy } from '../core/models/popular-gear.model';

export const getPopularGear = (): UsedEquipmentWithUsedBy[] => CommonGearJson;
