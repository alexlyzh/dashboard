import ApiContext from '../../context/api-context';
import TestsContext from '../../context/tests-context';
import { useContext, useEffect, useMemo } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { ApiPath } from '../../const';
import { adaptTestToClient } from '../../utils/adapters';
import { Test } from '../../types/types';

type PageParams = {
  id: string,
}

export const useTest = (testId?: number) => {
  const api = useContext(ApiContext);
  const [tests, isLoading, setTests, setIsLoading] = useContext(TestsContext);
  const params = useParams<PageParams>();
  const id = useMemo(() => Number(testId ? testId : params.id), [testId, params.id]);
  const test = useMemo(() => tests.find((item) => item.id === id), [id, tests]);

  useEffect(() => {
    if (!tests.length && id && api && setIsLoading && setTests) {
      setIsLoading(true);
      (async () => {
        const {data} = await api.get<Test>(generatePath(ApiPath.test, { id }));
        const adaptedTest = adaptTestToClient(data);
        setIsLoading(false);
        setTests([adaptedTest]);
      })();
    }
  }, [tests.length, id, api, setIsLoading, setTests]);

  return [test, isLoading] as [Test | undefined, boolean];
};
