import React from "react";
import pathList from "../pathList";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: pathList.signIn,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
