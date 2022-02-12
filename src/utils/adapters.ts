import { Site, Test } from '../types/types';
import { testType } from '../const';

export const adaptTestToClient = ({id, name, type, siteId, status}: Test) => ({
  id,
  name,
  type: testType[type.toLowerCase() as keyof typeof testType],
  status,
  siteId,
});

const removeWebProtocol = (url: string) => {
  let handled = '';
  handled = url.replace('https://', '');
  handled = handled.replace('http://', '');
  handled = handled.replace('www.', '');
  return handled;
};

export const adaptSiteToClient = ({id, url}: Site) => ({
  id,
  url: removeWebProtocol(url),
});
