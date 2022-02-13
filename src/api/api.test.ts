import { createApi, BASE_API_URL, REQUEST_TIMEOUT } from './api';

describe('Function: createApi', () => {
  it('should return correct api instance', () => {
    const api = createApi();

    expect(api.defaults.baseURL).toEqual(BASE_API_URL);
    expect(api.defaults.timeout).toEqual(REQUEST_TIMEOUT);
  });
});
