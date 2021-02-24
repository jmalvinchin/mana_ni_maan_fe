import React from "react"
import { useAuth } from "../AuthProvider"
import { Route, Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import { getToken, isAuthenticated } from "./Token"

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  // let token = Cookies.get("access-token");
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
