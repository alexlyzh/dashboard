import FinalizePage from './finalize-page';
import { generatePath, Route, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppPath } from '../../../const';

const MOCK_ID = 1;

const pathname = generatePath(AppPath.finalize, { id: MOCK_ID });
const history = createMemoryHistory();
history.push(pathname);

describe('Component: FinalizePage', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Route exact path={pathname}>
          <FinalizePage />
        </Route>
      </Router>
    );

    expect(screen.getByLabelText(/finalize page/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument();
  });
});
