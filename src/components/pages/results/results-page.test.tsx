import ResultsPage from './results-page';
import { generatePath, Route, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppPath } from '../../../const';

const MOCK_ID = 1;

const pathname = generatePath(AppPath.results, { id: MOCK_ID });
const history = createMemoryHistory();
history.push(pathname);

describe('Component: FinalizePage', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Route exact path={pathname}>
          <ResultsPage />
        </Route>
      </Router>
    );

    expect(screen.getByLabelText(/results page/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument();
  });
});
