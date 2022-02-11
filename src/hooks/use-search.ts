import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value.toLowerCase());
  };

  const resetSearch = () => setSearch('');

  return { search, handleSearchChange, resetSearch };
};
