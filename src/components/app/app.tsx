import React from 'react';
import DashboardPage from '../pages/dashboard/dashboard-page';
import FinalizePage from '../pages/finalize/finalize-page';
import ResultsPage from '../pages/results/results-page';
import TestsContext from '../../context/tests-context';
import SitesContext from '../../context/sites-context';
import { Route, Switch } from 'react-router-dom';
import { useRemoteData } from '../../hooks/use-remote-data';
import { ApiPath, appPath } from '../../const';
import { Test, Site } from '../../types/types';

function App() {
  const testsData = useRemoteData<Test>(ApiPath.tests);
  const sitesData = useRemoteData<Site>(ApiPath.sites);

  return (
    <TestsContext.Provider value={testsData}>
      <SitesContext.Provider value={sitesData}>
        <Switch>
          <Route exact path={appPath.root} component={DashboardPage}/>
          <Route exact path={appPath.finalize} component={FinalizePage}/>
          <Route exact path={appPath.results} component={ResultsPage}/>
        </Switch>
      </SitesContext.Provider>
    </TestsContext.Provider>
  );
}

export default App;
