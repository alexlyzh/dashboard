import {useState} from 'react';
import {SortType} from '../const';

export const useSort = () => {
  const [currentSort, setCurrentSort] = useState<SortType | ''>('');
  const sortNameAsc = () => setCurrentSort(SortType.NameAsc);
  const sortNameDesc = () => setCurrentSort(SortType.NameDesc);
  const sortTypeAsc = () => setCurrentSort(SortType.TypeAsc);
  const sortTypeDesc = () => setCurrentSort(SortType.TypeDesc);
  const sortSiteAsc = () => setCurrentSort(SortType.StatusAsc);
  const sortSiteDesc = () => setCurrentSort(SortType.SiteDesc);
  const sortStatusAsc = () => setCurrentSort(SortType.StatusAsc);
  const sortStatusDesc = () => setCurrentSort(SortType.StatusDesc);

  const handleNameSort = () => {
    if (currentSort === SortType.NameAsc) {
      sortNameDesc();
      return;
    }
    sortNameAsc();
  };

  const handleTypeSort = () => {
    if (currentSort === SortType.TypeAsc) {
      sortTypeDesc();
      return;
    }
    sortTypeAsc();
  };

  const handleSiteSort = () => {
    if (currentSort === SortType.SiteAsc) {
      sortSiteDesc();
      return;
    }
    sortSiteAsc();
  };

  const handleStatusSort = () => {
    if (currentSort === SortType.StatusAsc) {
      sortStatusDesc();
      return;
    }
    sortStatusAsc();
  };

  return {
    currentSort,
    handleNameSort,
    handleTypeSort,
    handleSiteSort,
    handleStatusSort
  };
};
