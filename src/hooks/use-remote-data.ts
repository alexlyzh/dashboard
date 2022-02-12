import ApiContext from '../context/api-context';
import { useContext, useEffect, useState } from 'react';
import { ApiPath } from '../const';

export const useRemoteData = <Type>(url: ApiPath) => {
  const api = useContext(ApiContext);
  const [data, setData] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (api) {
        setLoading(true);
        const {data} = await api.get<Type[]>(url);
        setLoading(false);
        setData(data);
      }
    })();
  }, [api, url]);

  return [data, loading] as [Type[], boolean];
};
