import React, { useState } from "react";
import ReactDOM from "react-dom";
import cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import NoMatch from "./components/NoMatch";

import constants from "./constants";
import pathList from "./pathList";

function App() {
  const { home, signIn, signUp } = pathList;
  const [isAuthenticated, setIsAuthenticated] = useState(cookies.get(constants.token) ? true : false);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={home} component={Home} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <Route path={signIn}>
          <SignIn setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path={signUp}>
          <SignUp setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
