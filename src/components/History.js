import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Curry from "./Curry"
import Lebron from "./Lebron"
import { Route, Switch, Redirect } from "react-router-dom"
import Wade from "./Wade"
import Oneal from "./Oneal"
import NotFound from "./NotFound"

function History() {
  return (
    <div className="web">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route path="/lebron" component={Lebron} />
        <Route path="/curry" component={Curry} />
        <Route path="/wade" component={Wade} />
        <Route path="/shaq" component={Oneal} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default History
