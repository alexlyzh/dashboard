import { ChangeEvent, useState, useCallback, useEffect } from 'react';
import { KeyboardKey } from '../const';

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value.toLowerCase());
  };

  const resetSearch = () => setSearch('');

  const onDocumentEscKeydown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ESC) {
      resetSearch();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }
  }, []);

  useEffect(() => {
    search && document.addEventListener('keydown', onDocumentEscKeydown);
    return () => document.removeEventListener('keydown', onDocumentEscKeydown);
  }, [search, onDocumentEscKeydown]);

  return { search, handleSearchChange, resetSearch };
};
