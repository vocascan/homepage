import React from "react";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";

import Home from "./screens/Home/Home.jsx";

import "./index.scss";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
