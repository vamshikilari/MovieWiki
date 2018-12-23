import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import Dashboard from './components/Dashboard'


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/:movieName/:movieId" component={MovieDetail} />
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
