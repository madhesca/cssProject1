import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"

import { Route, Switch, Redirect } from "react-router-dom"

function History() {
  return (
    <div className="web">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default History
