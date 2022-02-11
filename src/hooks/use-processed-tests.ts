import { useMemo } from 'react';
import { Test, Site } from '../types/types';
import { SortType } from '../const';
import { sortTests } from '../utils/sort';

const filterTests = (tests: Test[], match: string) => tests.filter((test) => test.name.toLowerCase().includes(match.toLowerCase()));

export const useProcessedTests = (tests: Test[], sites: Site[], match: string, sort: SortType | '') => {
  return useMemo(() => {
    return sortTests(sort, filterTests(tests, match), sites);
  }, [tests, sites, match, sort]);
};
