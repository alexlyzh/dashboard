import ApiContext from '../context/api-context';
import TestsContext from '../context/tests-context';
import { useContext, useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { ApiPath } from '../const';
import { Test } from '../types/types';

type PageParams = {
  id: string,
}

export const useTest = (testId?: string | number) => {
  const api = useContext(ApiContext);
  const [tests] = useContext(TestsContext);
  const [test, setTest] = useState<Test | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params: PageParams = useParams();
  const id = Number(testId ? testId : params.id);

  const foundTest = tests.find((test) => test.id === id);

  useEffect(() => {
    if (foundTest) {
      setTest(foundTest);
    }
  }, [foundTest])

  useEffect(() => {
    if (!test && api) {
      (async () => {
        setIsLoading(true);
        const {data} = await api.get<Test>(generatePath(ApiPath.test, {id}));
        setIsLoading(false);
        setTest(data);
      })();
    }
  }, [test, api]);

  return [test, isLoading] as [Test | null, boolean];
};
