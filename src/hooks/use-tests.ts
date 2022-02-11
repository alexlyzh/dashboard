import ApiContext from '../context/api-context';
import { useContext, useEffect, useState } from 'react';
import { Test } from '../types/types';
import { apiPath } from '../const';

export const useTests = () => {
  const api = useContext(ApiContext);
  const [tests, setTests] = useState<Test[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (api) {
        setIsLoading(true);
        const {data} = await api.get<Test[]>(apiPath.tests);
        setIsLoading(false);
        setTests(data);
      }
    })();
  }, [api]);

  return [tests, isLoading] as [Test[], boolean];
};
