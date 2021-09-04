import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { pages } from '@utils/routes';
import { Dashboard, NotFound } from '@studio/pages';
import { data } from '@studio/stories/dashboard/data.mock';

import { ConnectionDialog } from './pages/dashboard/Dashboard.styles';
import Stepper from './components/stepper/Stepper';

export const Routes = () => {
  const steps = ['SELECT A SOURCE', 'ENTER A CREDENTIALS', 'ADD TO GROUP(S)'];
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={pages.DASHBOARD}>
            <Dashboard data={data} />
          </Route>

          <Route exact path={pages.STEPS}>
            <ConnectionDialog>
              <div className="container">
                <Stepper steps={steps} />
              </div>
            </ConnectionDialog>
          </Route>
          <Route exact path={pages.HOME}>
            <Dashboard data={data} />
          </Route>

          {/* List a generic 404-Not Found route here */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
