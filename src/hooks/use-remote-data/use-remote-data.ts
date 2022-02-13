import ApiContext from '../../context/api-context';
import { useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { ApiPath } from '../../const';

export const useRemoteData = <Type = any>(
  url: ApiPath,
  shouldLoadData: boolean,
  adaptToClient: (data: Type) => Type,
  onSuccess?: () => void,
) => {
  const api = useContext(ApiContext);
  const [remoteData, setRemoteData] = useState<Type[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (shouldLoadData && api) {
      (async () => {
        setIsLoading(true);
        try {
          const {data} = await api.get<Type[]>(url);
          const adaptedData = data.map(adaptToClient);
          setRemoteData(adaptedData);
          onSuccess && onSuccess();
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [api, url, shouldLoadData, adaptToClient, onSuccess]);

  return [remoteData, isLoading, setRemoteData, setIsLoading] as [
    Type[],
    boolean,
    Dispatch<SetStateAction<Type[]>>,
    Dispatch<SetStateAction<boolean>>,
  ];
};
