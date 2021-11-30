import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Download from "./screens/Download/Download.jsx";
import Home from "./screens/Home/Home.jsx";
import LegalNotice from "./screens/Imprint/LegalNotice.jsx";
import Privacy from "./screens/Privacy/Privacy.jsx";

import ScrollToTop from "./hooks/ScrollToTop.js";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/legal-notice" component={LegalNotice} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
