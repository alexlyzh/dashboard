import MockAdapter from 'axios-mock-adapter';
import ApiContext from '../../context/api-context';
import { renderHook } from '@testing-library/react-hooks';
import { useRemoteData } from './use-remote-data';
import { ApiPath, HttpCode } from '../../const';
import { createApi } from '../../api/api';

const api = createApi();
const mockApi = new MockAdapter(api);

function ApiContextProvider({ children }: { children: ReturnType<typeof renderHook> }): JSX.Element {
  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

describe('Hook: useRemoteData',  () => {
  it('should return correct value', () => {
    const { result: { current } } = renderHook(() => useRemoteData(ApiPath.tests, false, (data) => data));
    const [data, isLoading, setData, setIsLoading] = current;

    expect(current).toBeInstanceOf(Array);
    expect(data).toBeInstanceOf(Array);
    expect(typeof isLoading).toEqual('boolean');
    expect(setData).toBeInstanceOf(Function);
    expect(setIsLoading).toBeInstanceOf(Function);
  });

  it('should load data',  async () => {
    let shouldLoadData = true;
    mockApi.onGet(ApiPath.tests).reply(HttpCode.OK, ['fake-response']);

    const { result, waitForNextUpdate } = renderHook(
      () => useRemoteData(ApiPath.tests, shouldLoadData, (data) => data, () => (shouldLoadData = false)),
      { wrapper: ApiContextProvider },
    );

    expect(result.current[0]).toEqual([]);
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(['fake-response']);
  });
});
