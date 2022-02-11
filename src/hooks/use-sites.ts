import ApiContext from '../context/api-context';
import { useContext, useEffect, useState } from 'react';
import { Site } from '../types/types';
import { apiPath } from '../const';

export const useSites = () => {
  const api = useContext(ApiContext);
  const [sites, setSites] = useState<Site[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (api) {
        setIsLoading(true);
        const {data} = await api.get<Site[]>(apiPath.sites);
        setIsLoading(false);
        setSites(data);
      }
    })();
  }, [api]);

  return [sites, isLoading] as [Site[], boolean];
};
