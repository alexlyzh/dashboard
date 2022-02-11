import ApiContext from '../context/api-context';
import { useContext, useEffect, useState } from 'react';
import { ApiPath } from '../const';

export const useRemoteData = <Type>(url: ApiPath) => {
  const api = useContext(ApiContext);
  const [data, setData] = useState<Type[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (api) {
        setIsLoading(true);
        const {data} = await api.get<Type[]>(url);
        setIsLoading(false);
        setData(data);
      }
    })();
  }, [api, url]);

  return [data, isLoading] as [Type[], boolean];
};
