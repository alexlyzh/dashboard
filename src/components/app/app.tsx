import React from 'react';
import DashboardPage from '../pages/dashboard/dashboard-page';
import FinalizePage from '../pages/finalize/finalize-page';
import ResultsPage from '../pages/results/results-page';
import TestsContext from '../../context/tests-context';
import SitesContext from '../../context/sites-context';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ApiPath, AppPath } from '../../const';
import { adaptTestToClient, adaptSiteToClient } from '../../utils/adapters';
import { useRemoteData } from '../../hooks/use-remote-data';
import { Site, Test } from '../../types/types';

function App(): JSX.Element {
  const location = useLocation();
  const shouldLoadData = location.pathname === AppPath.root;
  const [tests, isLoadingTests] = useRemoteData<Test>(ApiPath.tests, shouldLoadData, adaptTestToClient);
  const [sites, isLoadingSites] = useRemoteData<Site>(ApiPath.sites, shouldLoadData, adaptSiteToClient);

  return (
    <TestsContext.Provider value={[tests, isLoadingTests]}>
      <SitesContext.Provider value={[sites, isLoadingSites]}>
        <Switch>
          <Route exact path={AppPath.root} component={DashboardPage}/>
          <Route exact path={AppPath.finalize} component={FinalizePage}/>
          <Route exact path={AppPath.results} component={ResultsPage}/>
        </Switch>
      </SitesContext.Provider>
    </TestsContext.Provider>
  );
}

export default App;
