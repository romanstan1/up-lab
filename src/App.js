import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Thinking from './pages/Thinking'
import Postpage from './pages/Postpage'
import Error404 from './pages/Error404'

import PageShell from './molecules/PageShell'


export default class App extends Component {
  render() {
    return (
      <div className='border'>
        <div className='wrapper'>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/contact" component={PageShell(Contact)} />
            <Route exact path="/about" component={PageShell(About)} />
            <Route exact path="/thinking" component={PageShell(Thinking)} />
            <Route path="/thinking/:slug" component={PageShell(Postpage)} />
            <Route component={Error404}/>
          </Switch>
        </div>
      </div>
    )
  }
}
