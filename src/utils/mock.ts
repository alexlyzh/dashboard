import { TestStatus } from '../const';
import { Test } from '../types/types';

const testStatuses: (keyof typeof TestStatus)[] = ['DRAFT', 'ONLINE', 'STOPPED', 'PAUSED'];

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
  url: `https://${getRandomString(getRandomInteger(0, 10))}.com`,
});

export const getMockTest = (siteId?: number) => ({
  id: getRandomInteger(0, 10),
  name: getRandomString(getRandomInteger(0, 10)),
  type: getRandomString(getRandomInteger(0, 10)),
  status: testStatuses[getRandomInteger(0, testStatuses.length - 1)],
  siteId: siteId ? siteId : getRandomInteger(0, 10),
});

export const getSeveralMockTests = (count: number, siteId?: number) => {
  const uniqueIds: number[] = [];
  const tests: Test[] = [];
  while (tests.length !== count) {
    const test = getMockTest(siteId);
    if (!uniqueIds.includes(test.id)) {
      tests.push(test);
      uniqueIds.push(test.id);
    }
  }
  return tests;
};
