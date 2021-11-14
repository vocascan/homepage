import React from "react";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav.jsx";
import Download from "./screens/Download/Download.jsx";
import Home from "./screens/Home/Home.jsx";

import "./index.scss";

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
