import ApiContext from '../context/api-context';
import { useContext, useEffect, useState } from 'react';
import { ApiPath } from '../const';

export const useRemoteData = <Type>(
  url: ApiPath,
  shouldLoadData: boolean,
  adaptToClient: (data: Type) => Type,
) => {
  const api = useContext(ApiContext);
  const [data, setData] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (shouldLoadData && api) {
      (async () => {
        setLoading(true);
        const {data} = await api.get<Type[]>(url);
        const adaptedData = data.map(adaptToClient);
        setLoading(false);
        setData(adaptedData);
      })();
    }
  }, [api, url, shouldLoadData]);

  return [data, loading] as [Type[], boolean];
};
