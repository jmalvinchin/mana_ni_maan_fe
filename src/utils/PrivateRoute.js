import React from "react"
import { Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "./Token"

function PrivateRoute({ children, ...rest }) {
  let authenticated = isAuthenticated()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
