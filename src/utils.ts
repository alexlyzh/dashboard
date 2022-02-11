import { Site, Test } from './types/types';
import {SortType, StatusPriority, TestStatus} from './const';

export const getRandomHEXColor = () => {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getSiteName = (testId: number, sites: Site[]) => {
  const testSite = sites.find((site) => site.id === testId);
  let url = testSite ? testSite.url : null;
  if (url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
  }
  return url;
};

const sortAsc = (tests: Test[], keyName: keyof Test) =>
  tests.slice().sort((a, b) => {
    if (a[keyName] > b[keyName]) return 1;
    if (a[keyName] < b[keyName]) return -1;
    return 0;
  });

const sortDesc = (tests: Test[], keyName: keyof Test) =>
  tests.slice().sort((a, b) => {
    if (b[keyName] > a[keyName]) return 1;
    if (b[keyName] < a[keyName]) return -1;
    return 0;
  });

export const Sort = {
  [SortType.NameAsc]: (tests: Test[]) => sortAsc(tests, 'name'),
  [SortType.NameDesc]: (tests: Test[]) => sortDesc(tests, 'name'),
  [SortType.TypeAsc]: (tests: Test[]) => sortAsc(tests, 'type'),
  [SortType.TypeDesc]: (tests: Test[]) => sortDesc(tests, 'type'),

  [SortType.SiteAsc]: (tests: Test[], sites: Site[]) => {
    const sitesMap = sites.reduce((mapped, site) => {
      mapped[site.id] = site.url;
      return mapped;
    }, {} as Record<number, string>);
    console.log(sitesMap)
    return tests.slice().sort((a, b) => {
      if (sitesMap[a.siteId] > sitesMap[b.siteId]) return 1;
      if (sitesMap[a.siteId] < sitesMap[b.siteId]) return -1;
      return 0;
    });
  },

  [SortType.SiteDesc]: (tests: Test[], sites: Site[]) => {
    const sitesMap = sites.reduce((mapped, site) => {
      mapped[site.id] = site.url;
      return mapped;
    }, {} as Record<number, string>);
    console.log(sitesMap)
    return tests.slice().sort((a, b) => {
      if (sitesMap[b.siteId] > sitesMap[a.siteId]) return 1;
      if (sitesMap[b.siteId] < sitesMap[a.siteId]) return -1;
      return 0;
    });
  },

  [SortType.StatusAsc]: (tests: Test[]) =>
    tests.slice().sort((a, b) => {
      if (StatusPriority[a.status as TestStatus] > StatusPriority[b.status as TestStatus]) return 1;
      if (StatusPriority[a.status as TestStatus] < StatusPriority[b.status as TestStatus]) return -1;
      return 0;
    }),

  [SortType.StatusDesc]: (tests: Test[]) =>
    tests.slice().sort((a, b) => {
      if (StatusPriority[b.status as TestStatus] > StatusPriority[a.status as TestStatus]) return 1;
      if (StatusPriority[b.status as TestStatus] < StatusPriority[a.status as TestStatus]) return -1;
      return 0;
    }),
};
