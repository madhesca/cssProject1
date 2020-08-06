import React from "react"
import "./App.css"
import History from "./components/History"
import NotFound from "./components/NotFound"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={History} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
