import React from 'react';
import DashboardPage from '../pages/dashboard/dashboard-page';
import FinalizePage from '../pages/finalize/finalize-page';
import ResultsPage from '../pages/results/results-page';
import { Route, Switch } from 'react-router-dom';
import { appPath } from '../../const';

function App() {
  return (
    <Switch>
      <Route exact path={appPath.root} component={DashboardPage}/>
      <Route exact path={appPath.finalize} component={FinalizePage}/>
      <Route exact path={appPath.results} component={ResultsPage}/>
    </Switch>
  );
}

export default App;
