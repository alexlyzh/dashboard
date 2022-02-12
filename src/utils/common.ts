import { Site } from '../types/types';

export const getRandomHEXColor = () => {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const removeWebProtocol = (url: string) => {
  let handled = '';
  handled = url.replace('https://', '');
  handled = handled.replace('http://', '');
  handled = handled.replace('www.', '');
  return handled;
};

export const getSiteNameById = (testId: number, sites: Site[]) => {
  const testSite = sites.find((site) => site.id === testId);
  let url = testSite ? testSite.url : null;
  if (url) {
    url = removeWebProtocol(url);
  }
  return url;
};
