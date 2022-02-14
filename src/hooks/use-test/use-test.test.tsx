import ApiContext from '../../context/api-context';
import TestsContext from '../../context/tests-context';
import MockAdapter from 'axios-mock-adapter';
import { generatePath, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useTest } from './use-test';
import { ApiPath, AppPath, HttpCode } from '../../const';
import { createApi } from '../../api/api';
import { getSeveralMockTests, getRandomInteger, getMockTest } from '../../utils/mock';
import { adaptTestToClient } from '../../utils/adapters';
import { Test } from '../../types/types';

const MOCK_ID = 1;

const api = createApi();
const mockApi = new MockAdapter(api);
const pathname = generatePath(AppPath.root, { id: MOCK_ID });
const history = createMemoryHistory();
history.push(pathname);

describe('Hook: useTest', () => {
  it('should return correct value', () => {
    function HookEnvironment({ children }: { children: ReturnType<typeof renderHook> }): JSX.Element {
      const tests = getSeveralMockTests(getRandomInteger(1, 5));
      tests[0].id = MOCK_ID;
      const isLoading = false;
      return (
        <ApiContext.Provider value={api}>
          <TestsContext.Provider value={[tests, isLoading]}>
            <Router history={history}>
              <Route exact path={pathname}>
                {children}
              </Route>
            </Router>
          </TestsContext.Provider>
        </ApiContext.Provider>
      );
    }

    const { result: {current}} = renderHook(() => useTest(MOCK_ID), { wrapper: HookEnvironment });
    const [test, isLoading] = current;

    expect(current).toBeInstanceOf(Array);
    expect(test).toBeInstanceOf(Object);
    expect(typeof isLoading).toEqual('boolean');
  });

  it('should load data',  async () => {
    const test = getMockTest();
    test.id = MOCK_ID;

    function HookEnvironment({ children }: { children: ReturnType<typeof renderHook> }): JSX.Element {
      const [tests, setTests] = useState<Test[]>([]);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      return (
        <ApiContext.Provider value={api}>
          <TestsContext.Provider value={[tests, isLoading, setTests, setIsLoading]}>
            <Router history={history}>
              <Route exact path={pathname}>
                {children}
              </Route>
            </Router>
          </TestsContext.Provider>
        </ApiContext.Provider>
      );
    }

    mockApi.onGet(generatePath(ApiPath.test, { id: test.id })).reply(HttpCode.OK, test);

    const { result, waitForNextUpdate } = renderHook(
      () => useTest(test.id),
      { wrapper: HookEnvironment },
    );

    expect(result.current[0]).toEqual(void 0);
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(adaptTestToClient(test));
  });
});
