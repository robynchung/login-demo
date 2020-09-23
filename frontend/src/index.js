import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import pathList from "./pathList";

function App() {
  const { signIn, signUp } = pathList;
  return (
    <Router>
      <Switch>
        <Route path={`/`}>
          <SignIn />
        </Route>
        <Route path={signUp}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
