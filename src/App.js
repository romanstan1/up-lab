import React, {Component} from 'react';
import {Route,Router,Switch} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Thinking from './pages/Thinking'
import Postpage from './pages/Postpage'
import Error404 from './pages/Error404'

export default class App extends Component {
  render() {
    return (
      <span>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/thinking" component={Thinking} />
          <Route component={Error404}/>
        </Switch>
      </span>
    )
  }
}
