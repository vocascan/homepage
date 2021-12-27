import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Download from "./screens/Download/Download";
import Home from "./screens/Home/Home";
import LegalNotice from "./screens/Legal/LegalNotice";
import Privacy from "./screens/Privacy/Privacy";

import ScrollToTop from "./hooks/ScrollToTop";

const App: React.FC = () => {
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
}

export default App;
