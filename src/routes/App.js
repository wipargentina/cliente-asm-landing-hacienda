import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Tanks from "../pages/Tanks";
import PageNotFound from "../pages/PageNotFound";

import "../assets/scss/styles.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gracias" component={Tanks} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
