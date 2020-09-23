import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import NoMatch from "./components/NoMatch";
import pathList from "./pathList";

function App() {
  const { home, signIn, signUp } = pathList;
  return (
    <Router>
      <Switch>
        <Route path={home}>
          <Home />
        </Route>
        <Route path={signIn}>
          <SignIn />
        </Route>
        <Route path={signUp}>
          <SignUp />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
