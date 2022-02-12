import BackLink from './back-link';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppPath } from '../../const';

describe('Component: BackLink', () => {
  it('should redirect on link click', () => {
    render(
      <BrowserRouter>
        <Switch>
          <Route path={AppPath.root}>
            This is root page
          </Route>
        </Switch>
        <Route>
          This is current page
          <BackLink to={AppPath.root} />
        </Route>
      </BrowserRouter>
    );

    expect(screen.getByText(/current page/)).toBeInTheDocument();
    userEvent.click(screen.getByText('Back'));
    expect(screen.getByText(/root page/)).toBeInTheDocument();
  });
});
