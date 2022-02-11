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

export const getMockTest = () => ({
  id: getRandomInteger(0, 10),
  name: getRandomString(getRandomInteger(0, 10)),
  type: getRandomString(getRandomInteger(0, 10)),
  status: getRandomString(getRandomInteger(0, 10)),
  siteId: getRandomInteger(0, 10),
});

export const getMockSite = () => ({
  id: getRandomInteger(0, 10),
  url: `https://${getRandomString(getRandomInteger(0, 10))}.com`,
});
