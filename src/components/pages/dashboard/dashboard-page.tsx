import './dashboard-page.css';
import MainLayout from '../../main-layout/main-layout';
import Search from './search/search';
import SortForm from './sort-form/sort-form';
import TestList from './test-list/test-list';
import TestsContext from '../../../context/tests-context';
import SitesContext from '../../../context/sites-context';
import { useContext } from 'react';
import { useSearch } from '../../../hooks/use-search';
import { useSort } from '../../../hooks/use-sort';
import { useProcessedTests } from '../../../hooks/use-processed-tests';

function DashboardPage(): JSX.Element {
  const [tests, isLoadingTests] = useContext(TestsContext);
  const [sites, isLoadingSites] = useContext(SitesContext);
  const {search, handleSearchChange, resetSearch} = useSearch();
  const sort = useSort();
  const handledTests = useProcessedTests(tests, sites, search, sort.currentSort);

  if (isLoadingTests) {
    return <p style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: 50,
    }}>
      Loading...
    </p>;
  }

  return (
    <MainLayout pageClassName="page__dashboard" heading={'Dashboard'} >
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
              sort={sort.currentSort}
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
