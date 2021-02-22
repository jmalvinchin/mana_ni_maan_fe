import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { BakingSlots } from "../components/baking-slot"
import { Orders } from "../components/orders"
import Login from "../components/login/Login"
import PrivateRoute from "../utils/PrivateRoute"

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <BakingSlots />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/orders">
        <Orders />
      </PrivateRoute>
    </Switch>
  )
}

export default Routes;
