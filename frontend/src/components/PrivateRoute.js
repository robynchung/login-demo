import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "./Header";
import pathList from "../pathList";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return rest.isAuthenticated ? (
          <>
            <Header setIsAuthenticated={rest.setIsAuthenticated} />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={pathList.signIn} />
        );
      }}
    />
  );
}

export default PrivateRoute;
