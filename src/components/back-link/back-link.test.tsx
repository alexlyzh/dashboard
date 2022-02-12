import BackLink from './back-link';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Component: BackLink', () => {
  it('should redirect on link click', () => {
    history.push('/current-page');

    render(
      <Router history={history}>
        <Switch>
          <Route exact path={'/previous-page'}>
            This is previous page
          </Route>
        </Switch>
        <Route exact path={'/current-page'}>
          This is current page
          <BackLink to={'/previous-page'} />
        </Route>
      </Router>
    );

    expect(screen.getByText(/current page/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/back/i));
    expect(screen.getByText(/previous page/i)).toBeInTheDocument();
  });
});
