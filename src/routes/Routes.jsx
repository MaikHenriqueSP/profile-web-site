import React from "react";

import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/index";

const Routes = () => (
  <Switch>
    <Route exact path={["/", "/home"]} component={Home} />
  </Switch>
);

export default Routes;
