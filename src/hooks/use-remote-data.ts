import ApiContext from '../context/api-context';
import { useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { ApiPath } from '../const';

export const useRemoteData = <Type>(
  url: ApiPath,
  shouldLoadData: boolean,
  adaptToClient: (data: Type) => Type,
  onSuccess?: () => void,
) => {
  const api = useContext(ApiContext);
  const [remoteData, setRemoteData] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (shouldLoadData && api) {
      (async () => {
        setLoading(true);
        const {data} = await api.get<Type[]>(url);
        const adaptedData = data.map(adaptToClient);
        setLoading(false);
        setRemoteData(adaptedData);
        onSuccess && onSuccess();
      })();
    }
  }, [api, url, shouldLoadData, adaptToClient, onSuccess]);

  return [remoteData, loading, setRemoteData, setLoading] as [
    Type[],
    boolean,
    Dispatch<SetStateAction<Type[]>>,
    Dispatch<SetStateAction<boolean>>,
  ];
};
