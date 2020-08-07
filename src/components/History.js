import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Curry from "./Curry"
import Lebron from "./Lebron"
import { Route, Switch } from "react-router-dom"
import Wade from "./Wade"
import Oneal from "./Oneal"
import NotFound from "./NotFound"
import About from "./About"
import Profile from "./Profile"
import Contacts from "./Contacts"

function History() {
  return (
    <div className="web">
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/lebron" component={Lebron} />
        <Route path="/curry" component={Curry} />
        <Route path="/wade" component={Wade} />
        <Route path="/shaq" component={Oneal} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default History
