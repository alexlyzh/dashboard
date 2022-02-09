import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import { Route, Switch } from 'react-router-dom';
import { appRoute } from './const';


function App() {
  return (
    <Switch>
      <Route exact path={appRoute.root} component={Dashboard}/>
    </Switch>
  );
}

export default App;
