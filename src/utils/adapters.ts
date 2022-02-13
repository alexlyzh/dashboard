import { Site, Test } from '../types/types';
import { testType } from '../const';

export const adaptTestToClient = ({id, name, type, siteId, status}: Test) => ({
  id,
  name,
  type: testType[type.toLowerCase() as keyof typeof testType],
  status: status.toLowerCase(),
  siteId,
});

export const adaptSiteToClient = (site: Site) => site;
