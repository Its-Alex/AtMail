import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './login.js'
import NotFound from './notFound.js'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Index extends React.Component {
  componentDidMount () {
    if (!global.localStorage.getItem('token') ||
    (this.props.location.pathname.indexOf('/login') === -1 &&
    this.props.location.pathname.indexOf('/signup') === -1)) {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path='/' component={Index} />
  </Router>, document.getElementById('root'))
registerServiceWorker()
