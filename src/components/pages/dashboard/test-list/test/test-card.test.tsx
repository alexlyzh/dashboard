import TestCard from './test-card';
import userEvent from '@testing-library/user-event';
import { Router, Switch, Route, generatePath } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { getMockSite, getMockTest } from '../../../../../utils/mock';
import { createMemoryHistory } from 'history';
import { TestStatus, redirectBtnName, AppPath } from '../../../../../const';

const MOCK_SITE_ID = 1;

const history = createMemoryHistory();

describe('Component: TestCard', () => {
  const test = getMockTest(MOCK_SITE_ID);
  const site = getMockSite(MOCK_SITE_ID);
  const isResultsPageRedirect = test.status.toLowerCase() !== TestStatus.Draft;
  const linkText = isResultsPageRedirect ? redirectBtnName.results : redirectBtnName.finalize;
  const pathname = isResultsPageRedirect
    ? generatePath(AppPath.results, { id: test.id })
    : generatePath(AppPath.finalize, { id: test.id });

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <TestCard
          test={test}
          sites={[site]}
          isLoadingSites={false}
        />
      </Router>
    );

    expect(screen.getByLabelText(/test card/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${test.name}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${test.type}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${test.status}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${site.url}`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: linkText })).toBeInTheDocument();
  });

  it('should redirect on redirect link click', () => {
    render(
      <Router history={history}>
        <Switch>
          <Route exact path={AppPath.root}>
            <TestCard
              test={test}
              sites={[site]}
              isLoadingSites={false}
            />
          </Route>
          <Route exact path={pathname}>
            { linkText }
          </Route>
        </Switch>
      </Router>
    );

    expect(screen.getByLabelText(/test card/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: linkText }));

    expect(screen.queryByLabelText(/test card/i)).not.toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});
