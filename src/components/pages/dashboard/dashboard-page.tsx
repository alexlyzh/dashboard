import MainLayout from '../../main-layout/main-layout';
import Search from './search/search';
import SortForm from './sort-form/sort-form';
import TestList from './test-list/test-list';
import './dashboard-page.css';
import {SortType} from '../../../const';
import {Sort} from '../../../utils';
import {useMemo} from 'react';
import {useSites} from '../../../hooks/use-sites';
import {useTests} from '../../../hooks/use-tests';
import {useSearch} from '../../../hooks/use-search';
import {useSort} from '../../../hooks/use-sort';

function DashboardPage(): JSX.Element {
  const [tests, isLoadingTests] = useTests();
  const [sites, isLoadingSites] = useSites();
  const {search, handleSearchChange, resetSearch} = useSearch();
  const sort = useSort();
  const {currentSort} = sort;

  const handledTests = useMemo(() => {
    const handledList = tests.filter((test) => test.name.toLowerCase().includes(search.toLowerCase()));
    switch (currentSort) {
      case SortType.NameAsc:
        return Sort[SortType.NameAsc](handledList);
      case SortType.NameDesc:
        return Sort[SortType.NameDesc](handledList);
      case SortType.TypeAsc:
        return Sort[SortType.TypeAsc](handledList);
      case SortType.TypeDesc:
        return Sort[SortType.TypeDesc](handledList);
      case SortType.SiteAsc:
        return Sort[SortType.SiteAsc](tests, sites);
      case SortType.SiteDesc:
        return Sort[SortType.SiteDesc](tests, sites);
      case SortType.StatusAsc:
        return Sort[SortType.StatusAsc](tests);
      case SortType.StatusDesc:
        return Sort[SortType.StatusDesc](tests);
      default:
        return handledList;
    }
  }, [tests, sites, search, currentSort]);

  return (
    <MainLayout heading={'Dashboard'} >
      <section aria-label="Tests">
        <div className="container">
          <div className="dashboard">
            <Search
              tests={handledTests}
              isLoadingTests={isLoadingTests}
              search={search}
              onSearchInput={handleSearchChange}
            />
            <SortForm
              isVisible={Boolean(handledTests.length)}
              onSortNameClick={sort.handleNameSort}
              onSortSiteClick={sort.handleSiteSort}
              onSortStatusClick={sort.handleStatusSort}
              onSortTypeClick={sort.handleTypeSort}
            />
            <TestList
              tests={handledTests}
              sites={sites}
              isLoadingSites={isLoadingSites}
              isLoadingTests={isLoadingTests}
              onResetBtnClick={resetSearch}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default DashboardPage;
