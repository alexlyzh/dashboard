import ApiContext from '../../context/api-context';
import TestsContext from '../../context/tests-context';
import MockAdapter from 'axios-mock-adapter';
import { generatePath, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderHook } from '@testing-library/react-hooks';
import { useTest } from './use-test';
import { AppPath } from '../../const';
import { createApi } from '../../api/api';
import { getSeveralMockTests, getRandomInteger } from '../../utils/mock';

const MOCK_ID = 1;

const api = createApi();
const pathname = generatePath(AppPath.root, { id: MOCK_ID });
const history = createMemoryHistory();
history.push(pathname);

describe('Hook: useTest', () => {
  it('should return correct value', () => {
    function HookEnvironment({ children }: { children: any }): JSX.Element {
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
});
