import React from "react"
import { Router, browserHistory, Route } from "react-router"
import { App } from "./app"


const Routes = props => {

	return <Router history={ browserHistory }
                key={ Math.random() }>
          <Route path="/"
                 component={ App }>
          </Route>
        </Router>
}
export default Routes
