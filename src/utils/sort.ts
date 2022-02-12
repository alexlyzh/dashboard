import { Site, Test } from '../types/types';
import { SortType, StatusPriority, TestStatus } from '../const';

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
  [SortType.SiteAsc]: (tests: Test[], sites: Site[]) => {
    const sitesMap = sites.reduce((mapped, site) => {
      mapped[site.id] = site.url;
      return mapped;
    }, {} as Record<number, string>);
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
    return tests.slice().sort((a, b) => {
      if (sitesMap[b.siteId] > sitesMap[a.siteId]) return 1;
      if (sitesMap[b.siteId] < sitesMap[a.siteId]) return -1;
      return 0;
    });
  },

  [SortType.NameAsc]: (tests: Test[]) => sortAsc(tests, 'name'),
  [SortType.NameDesc]: (tests: Test[]) => sortDesc(tests, 'name'),
  [SortType.TypeAsc]: (tests: Test[]) => sortAsc(tests, 'type'),
  [SortType.TypeDesc]: (tests: Test[]) => sortDesc(tests, 'type'),

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

export const sortTests = (sort: SortType | '', tests: Test[], sites: Site[]) => {
  switch (sort) {
    case SortType.NameAsc:
      return Sort[SortType.NameAsc](tests);
    case SortType.NameDesc:
      return Sort[SortType.NameDesc](tests);
    case SortType.TypeAsc:
      return Sort[SortType.TypeAsc](tests);
    case SortType.TypeDesc:
      return Sort[SortType.TypeDesc](tests);
    case SortType.SiteAsc:
      return Sort[SortType.SiteAsc](tests, sites);
    case SortType.SiteDesc:
      return Sort[SortType.SiteDesc](tests, sites);
    case SortType.StatusAsc:
      return Sort[SortType.StatusAsc](tests);
    case SortType.StatusDesc:
      return Sort[SortType.StatusDesc](tests);
    default:
      return tests;
  }
};
