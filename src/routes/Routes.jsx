import React from "react";

import { Route, Switch } from "react-router-dom";

import { Home, Portfolio, AboutMe } from "../pages/index";

const Routes = () => (
  <Switch>
    <Route exact path={["/", "/home"]} component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/about-me" component={AboutMe} />
  </Switch>
);

export default Routes;
