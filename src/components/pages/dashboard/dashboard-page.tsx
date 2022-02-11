import MainLayout from '../../main-layout/main-layout';
import Search from '../../search/search';
import Sort from './sort/sort';
import TestList from './test-list/test-list';
import './dashboard-page.css';
import { useMemo } from 'react';
import { useSites } from '../../../hooks/use-sites';
import { useTests } from '../../../hooks/use-tests';
import { useSearch } from '../../../hooks/use-search';

function DashboardPage(): JSX.Element {
  const [tests, isLoadingTests] = useTests();
  const [sites, isLoadingSites] = useSites();
  const { search, handleSearchChange, resetSearch } = useSearch();


  const handledTests = useMemo(
    () => tests.filter((test) => test.name.toLowerCase().includes(search.toLowerCase())), [tests, search]
  );

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
            <Sort isVisible={Boolean(handledTests.length)} />
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
