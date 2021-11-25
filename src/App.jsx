import React from "react";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer.jsx";
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
      <Footer />
    </HashRouter>
  );
};

export default App;
