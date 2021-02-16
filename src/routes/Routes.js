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

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <BakingSlots />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </Switch>
  )
}

export default Routes;
