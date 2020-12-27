import React from "react";

import { Route, Switch } from "react-router-dom";

import { Home, Portfolio } from "../pages/index";

const Routes = () => (
  <Switch>
    <Route exact path={["/", "/home"]} component={Home} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Routes;
