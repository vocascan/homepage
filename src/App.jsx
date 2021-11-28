import React from "react";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Download from "./screens/Download/Download.jsx";
import Home from "./screens/Home/Home.jsx";
import Imprint from "./screens/Imprint/Imprint.jsx";
import Privacy from "./screens/Privacy/Privacy.jsx";

import ScrollToTop from "./hooks/ScrollToTop.js";

import "./index.scss";

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/imprint" component={Imprint} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
