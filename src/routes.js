import React from "react";
import History from "helpers/History";
import { Route, Router, Switch, Redirect } from "react-router-dom";

// Import das páginas
import Home from "pages/Home";

class Routes extends React.Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          {/* Rotas de página */}
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
