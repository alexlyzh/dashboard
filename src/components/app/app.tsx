import DashboardPage from '../pages/dashboard/dashboard-page';
import FinalizePage from '../pages/finalize/finalize-page';
import ResultsPage from '../pages/results/results-page';
import TestsContext from '../../context/tests-context';
import SitesContext from '../../context/sites-context';
import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useRemoteData } from '../../hooks/use-remote-data';
import { ApiPath, AppPath } from '../../const';
import { adaptTestToClient, adaptSiteToClient } from '../../utils/adapters';
import { Site, Test } from '../../types/types';

function App(): JSX.Element {
  const [isAppInit, setIsAppInit] = useState<boolean>(false);
  const initializeApp = () => setIsAppInit(true);

  const location = useLocation();
  const shouldLoadData = !isAppInit && (location.pathname === AppPath.root);
  const testsData = useRemoteData<Test>(ApiPath.tests, shouldLoadData, adaptTestToClient, initializeApp);
  const sitesData = useRemoteData<Site>(ApiPath.sites, shouldLoadData, adaptSiteToClient);

  return (
    <TestsContext.Provider value={testsData}>
      <SitesContext.Provider value={sitesData}>
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
