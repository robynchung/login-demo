import React from "react";
import { Redirect, Route } from "react-router-dom";
import pathList from "../pathList";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return rest.isAuthenticated ? <Component {...props} /> : <Redirect to={pathList.signIn} />;
      }}
    />
  );
}

export default PrivateRoute;
