import React from "react"
import { Router, browserHistory, Route } from "react-router"
import { App } from "./app"
import { Docs } from "./docs"

const Routes = props => {

	return <Router history={ browserHistory } key={ Math.random() }>
          <Route path="/" component={ App }>
            <Route path="docs" component={ Docs } />
          </Route>
        </Router>
}

export default Routes
