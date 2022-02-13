import { TestStatus, testType } from '../const';
import { Test } from '../types/types';

const testStatuses: (keyof typeof TestStatus)[] = ['DRAFT', 'ONLINE', 'STOPPED', 'PAUSED'];
const testTypes: (keyof typeof testType)[] = ['classic', 'mvt', 'server_side'];

export const getRandomInteger = (min = 0, max = 1): number => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomString = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const getMockSite = (siteId?: number) => ({
  id: siteId ? siteId : getRandomInteger(0, 10),
  url: `${getRandomString(getRandomInteger(0, 10))}.com`,
});

export const getMockTest = (siteId?: number) => ({
  id: getRandomInteger(0, 10),
  name: getRandomString(getRandomInteger(0, 100)),
  type: testTypes[getRandomInteger(0, testTypes.length - 1)],
  status: testStatuses[getRandomInteger(0, testStatuses.length - 1)],
  siteId: siteId ? siteId : getRandomInteger(0, 100),
});

export const getSeveralMockTests = (count: number, siteId?: number) => {
  const uniqueIds: number[] = [];
  const uniqueNames: string[] = [];
  const uniqueSiteIds: number[] = [];
  const tests: Test[] = [];

  while (tests.length !== count) {
    const test = getMockTest(siteId);

    const shouldSaveTest = !uniqueIds.includes(test.id)
      && !uniqueNames.includes(test.name)
      && !uniqueSiteIds.includes(test.siteId);

    if (shouldSaveTest) {
      tests.push(test);
      uniqueIds.push(test.id);
      uniqueNames.push(test.name);
      uniqueSiteIds.push(test.siteId);
    }
  }
  return tests;
};
