import App from './app';
import TestProgressPage from '../pages/test-progress-page/test-progress-page';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Switch, Route, generatePath } from 'react-router-dom';
import { AppPath, progressPageName } from '../../const';

const MOCK_ID = 1;

const history = createMemoryHistory();

const renderApp = () => {
  render(
    <Router history={history}>
      <Switch>
        <Route exact path={AppPath.root} component={App} />
        <Route exact path={generatePath(AppPath.results, {id: MOCK_ID})}>
          <TestProgressPage heading={progressPageName.results} />
        </Route>
        <Route exact path={generatePath(AppPath.finalize, {id: MOCK_ID})}>
          <TestProgressPage heading={progressPageName.finalize} />
        </Route>
      </Switch>
    </Router>
  );
};

describe('Component: App', () => {
  it('should render DashboardPage when navigating to Root path', () => {
    history.push(AppPath.root);
    renderApp();
    expect(screen.getByLabelText(/dashboard/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/results page/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/finalize page/i)).not.toBeInTheDocument();
  });

  it('should render Results page when navigating to "/results/:id"', () => {
    history.push(generatePath(AppPath.results, {id: MOCK_ID}));
    renderApp();
    expect(screen.getByLabelText(/results page/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/dashboard/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/finalize page/i)).not.toBeInTheDocument();
  });

  it('should render Finalize page when navigating to "/finalize/:id"', () => {
    history.push(generatePath(AppPath.finalize, {id: MOCK_ID}));
    renderApp();
    expect(screen.getByLabelText(/finalize page/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/dashboard/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/results page/i)).not.toBeInTheDocument();
  });
});
